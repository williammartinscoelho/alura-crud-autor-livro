import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Picker, Alert, TouchableNativeFeedback } from 'react-native';

import api from '../api';

export default function LivroForm({ navigation }) {
    const [loading, setLoading] = useState(true);

    const [titulo, setTitulo] = useState('');
    const [preco, setPreco] = useState('');
    const [autorId, setAutorId] = useState('');
    const [selectedAutor, setSelectedAutor] = useState('');

    const [autores, setAutores] = useState([]);

    useEffect(() => {
        function loadAutores() {
            console.log('Carregando autores...');
            setLoading(true);

            api.get('/autores')
                .then((response) => {
                    setAutores(response.data.reverse());
                    console.log('Autores carregado!');
                })
                .catch((error) => {
                    Alert.alert('Erro ao buscar da api!', error.message);
                    navigation.navigate('Home');

                    console.log(error.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        }

        loadAutores();
    }, []);


    function handleSubmit() {
        const data = {
            "titulo": titulo,
            "preco": preco,
            "autorId": selectedAutor
        }

        console.log(data);

        api.post('/livros', data)
            .then(() => {
                Alert.alert('Salvo', 'Seu livro foi salvo com sucesso!');
            })
            .catch((error) => {
                Alert.alert('Erro ao salvar', error.message);
            })
            .finally(() => {

            });
    }

    function handleCancel() {
        navigation.navigate('Home');
    }


    return (
        <SafeAreaView style={estilos.container}>
            <Text style={loading ? estilos.mostrarLoading : { display: 'none' }}>
                Carregando dados...
            </Text>

            <View style={loading ? { display: 'none' } : { display: 'flex' }}>

                <Text style={estilos.label}>Titulo</Text>
                <TextInput
                    style={estilos.input}
                    placeholder="Titulo do livro"
                    autoCapitalize="sentences"
                    value={titulo}
                    onChangeText={text => setTitulo(text)}
                />

                <Text style={estilos.label}>Preço</Text>
                <TextInput
                    style={estilos.input}
                    placeholder="Preço do livro"
                    keyboardType="numeric"
                    valu={preco}
                    onChangeText={text => setPreco(text)}
                />

                <Text style={estilos.label}>Autor</Text>
                <Picker
                    selectedValue={selectedAutor}
                    style={estilos.input}
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedAutor(itemValue);
                    }}
                >

                    {autores.map((autor) => (
                        <Picker.Item label={autor.nome} value={autor.id} key={autor.id} />
                    ))}
                </Picker>



                <View style={estilos.row}>
                    <TouchableNativeFeedback onPress={handleCancel}>
                        <View style={[estilos.btn, estilos.btnDanger, { marginRight: 10 }]}>
                            <Text style={estilos.btnText}>Cancelar</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={handleSubmit}>
                        <View style={[estilos.btn, estilos.btnPrimary, { marginLeft: 10 }]}>
                            <Text style={estilos.btnText}>Salvar</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>

            </View>
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F171E',
        padding: 15,
    },
    label: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15,
        marginBottom: 5
    },
    input: {
        height: 50,
        paddingHorizontal: 10,
        marginBottom: 30,
        color: '#fff',
        backgroundColor: '#1B2530',
    },
    row: {
        flexDirection: 'row',
    },
    btn: {
        height: 50,
        flex: 1,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnPrimary: {
        backgroundColor: '#00AAE1',
    },

    btnDanger: {
        backgroundColor: '#DC3545'
    },

    btnText: {
        color: '#fff',
    },
    mostrarLoading: {
        display: 'flex',
        color: '#fff',
        fontSize: 18,
        padding: 20,
        alignSelf: 'center'
    }

});