import React, { useState, useEffect } from 'react';

import api from '../../api.js';

export default function Autores() {
    const [autores, setAutores] = useState([]);

    function callbackFunction(novos_autores) {
        setAutores(novos_autores);
    }

    return (
        <>
            <div className="header">
                <h1>Cadastro de autores</h1>
                <h2>Cadastre seus autores favoritos aqui :D</h2>
            </div>

            <div className="content">
                <FormAutores parentCallback={callbackFunction} />

                <hr />
            </div>

            <div className="table-container">
                <TableAutores autores={autores} parentCallback={callbackFunction} />
            </div>
        </>
    );
}


function FormAutores({ parentCallback }) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function handleFormSubmit(event) {
        event.preventDefault();

        const data = {
            nome: nome,
            email: email,
            senha: senha
        }

        const response = await api.post("/autores", data);

        parentCallback(response.data.reverse());
    }

    return (
        <>
            <form className="pure-form pure-form-aligned" onSubmit={handleFormSubmit}>
                <fieldset>
                    <div className="pure-control-group">
                        <label htmlFor="name">Nome</label>
                        <input
                            id="name"
                            className="pure-input-1-3"
                            placeholder="Nome do autor"
                            value={nome}
                            onChange={event => setNome(event.target.value)}
                        />
                        <span className="pure-form-message-inline">This is a required field.</span>
                    </div>

                    <div className="pure-control-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            className="pure-input-1-3"
                            placeholder="Endereço de email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                    </div>

                    <div className="pure-control-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            className="pure-input-1-3"
                            placeholder="Senha"
                            value={senha}
                            onChange={event => setSenha(event.target.value)}
                        />
                    </div>

                    <div className="pure-controls">
                        <button type="submit" className="pure-button pure-button-primary">Salvar</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

function TableAutores({ autores, parentCallback }) {
    useEffect(
        () => {
            async function loadAutores() {
                console.log("Carregando autores...");
                const response = await api.get("/autores");
                //console.log(response.data);
                parentCallback(response.data.reverse());
                console.log("Autores carregado!");
            }

            loadAutores();
        }, []
    );

    return (
        <>
            <table className="pure-table">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {autores.map((autor, index) => (
                        <tr key={autor.id}>
                            <td>{autores.length - index}</td>
                            <td>{autor.id}</td>
                            <td>{autor.nome.length > 15 ? autor.nome.substring(0, 15) + "..." : autor.nome}</td>
                            <td>{autor.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}