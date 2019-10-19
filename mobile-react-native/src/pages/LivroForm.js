import React, { useState, useEffect } from 'react';
import {
    ActivityIndicator,
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet,
    Picker,
    Text,
    TextInput,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
} from 'react-native';

import api from '../api';

export default function LivroForm({ navigation }) {
    const [loading, setLoading] = useState(true);
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [labelBtn, setLabelBtn] = useState('Salvar');

    const [titulo, setTitulo] = useState('');
    const [preco, setPreco] = useState('');
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
        Keyboard.dismiss();
        setLabelBtn('Salvando...');
        setLoadingSubmit(true);

        const data = {
            "titulo": titulo,
            "preco": preco,
            "autorId": selectedAutor
        }

        console.log(data);

        api.post('/livros', data)
            .then(() => {
                Alert.alert('Salvo', 'Seu livro foi salvo com sucesso!');
                clearForm();
            })
            .catch((error) => {
                Alert.alert('Erro ao salvar', error.message);
            })
            .finally(() => {
                setLabelBtn('Salvar');
                setLoadingSubmit(false);
            });
    }

    function handleCancel() {
        navigation.navigate('Home');
    }

    function clearForm() {
        setTitulo('');
        setPreco('');
        setSelectedAutor(0);
    }


    return (
        <SafeAreaView style={estilos.container}>
            <KeyboardAvoidingView behavior="padding" style={estilos.content}>

                <View style={loading ? estilos.mostrarLoading : { display: 'none' }}>
                    <Text style={{ color: '#FFF' }}>Carregando autores... </Text>
                    <ActivityIndicator size="small" color="rgb(000, 170, 255)" />
                </View>


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
                            <Text style={estilos.btnText}>
                                {labelBtn}
                            </Text>

                            <ActivityIndicator
                                size="small"
                                color="#FFF"
                                style={[{ marginLeft: 10 }, loadingSubmit ? { display: 'flex' } : { display: 'none' }]}
                            />
                        </View>
                    </TouchableNativeFeedback>
                </View>


            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F171E',
        padding: 15,
    },

    content: {
        display: 'flex',
        flex: 1,
    },

    row: {
        flexDirection: 'row',
    },

    label: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15,
        marginBottom: 5,
    },

    input: {
        height: 50,
        paddingHorizontal: 10,
        marginBottom: 30,
        color: '#fff',
        backgroundColor: '#1B2530',
    },

    btn: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnPrimary: {
        backgroundColor: '#00AAE1',
    },

    btnDanger: {
        backgroundColor: '#DC3545',
    },

    btnText: {
        color: '#fff',
    },

    mostrarLoading: {
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        alignSelf: 'center',
    }
});