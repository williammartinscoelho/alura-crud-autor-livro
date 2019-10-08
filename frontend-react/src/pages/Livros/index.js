import React, { useEffect, useState } from 'react';

import api from '../../api.js';

export default function Livros() {
    const [livros, setLivros] = useState([]);

    function callbackFunction(novos_livros) {
        setLivros(novos_livros);
    }

    return (
        <>
            <div className="header">
                <h1>Cadastro de livros</h1>
                <h2>Cadastre seus livros favoritos aqui :D</h2>
            </div>


            <div className="content">
                <FormLivros parentCallback={callbackFunction} />
                <hr />
            </div>

            <div className="table-container">
                <TableLivros livros={livros} parentCallback={callbackFunction} />
            </div>
        </>
    );
}

function FormLivros({ parentCallback }) {
    const [autores, setAutores] = useState([]);

    useEffect(
        () => {
            async function loadAutores() {
                console.log("Carregando autores...");
                const response = await api.get("/autores");
                //console.log(response.data);
                setAutores(response.data.reverse());
                console.log("Autores carregado!");
            }

            loadAutores();
        }, []
    );

    const [titulo, setTiulo] = useState("");
    const [preco, setPreco] = useState("");
    const [autorId, setAutorId] = useState("");

    async function handleFormSubmit(event) {
        event.preventDefault();

        const data = {
            titulo: titulo,
            preco: preco,
            autorId: autorId
        }

        const response = await api.post("/livros", data);

        parentCallback(response.data.reverse());
    }

    return (
        <>
            <form className="pure-form pure-form-aligned" onSubmit={handleFormSubmit}>
                <fieldset>
                    <div className="pure-control-group">
                        <label htmlFor="titulo">Titulo</label>
                        <input
                            id="titulo"
                            className="pure-input-1-3"
                            placeholder="Titulo do livro"
                            value={titulo}
                            onChange={event => setTiulo(event.target.value)}
                        />
                        <span className="pure-form-message-inline">This is a required field.</span>
                    </div>

                    <div className="pure-control-group">
                        <label htmlFor="preco">Preço</label>
                        <input
                            id="preco"
                            className="pure-input-1-3"
                            type="number"
                            placeholder="Preço do livro"
                            value={preco}
                            onChange={event => setPreco(event.target.value)}
                        />
                    </div>

                    <div className="pure-control-group">
                        <label htmlFor="autor">Autor</label>

                        <select
                            id="autor"
                            name="autor"
                            className="pure-input-1-3"
                            value={autorId}
                            onChange={event => setAutorId(event.target.value)}
                        >
                            {autores.map(autor => (
                                <option key={autor.id} value={autor.id}>{autor.nome.length > 25 ? autor.nome.substring(0, 25) + "..." : autor.nome}</option>
                            ))}
                        </select>
                    </div>

                    <div className="pure-controls">
                        <button type="submit" className="pure-button pure-button-primary">Salvar</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}


function TableLivros({ livros, parentCallback }) {
    //const [livros, setLivros] = useState([]);

    useEffect(
        () => {
            async function loadLivros() {
                console.log("Carregando livros...");
                const response = await api.get("/livros");
                //console.log(response);
                //setLivros(response.data.reverse());
                parentCallback(response.data.reverse());
                console.log("Livros carregado!");
            }

            loadLivros();
        }, []
    );

    return (
        <>
            <table className="pure-table">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Id</th>
                        <th>Titulo</th>
                        <th>Autor</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                    {livros.map((livro, index) => (
                        <tr key={livro.id}>
                            <td>{livros.length - index}</td>
                            <td>{livro.id}</td>
                            <td>{livro.titulo}</td>
                            <td>{livro.autor.nome}</td>
                            <td>{livro.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}