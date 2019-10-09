import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableNativeFeedback, KeyboardAvoidingView, ActivityIndicator } from 'react-native';

import api from '../api';

export default function AutorForm({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');



    function handleSubmit() {
        const data = {
            "nome": nome,
            "email": email,
            "senha": senha
        }

        api.post('/autores', data)
            .then(() => {
                Alert.alert('Salvo', 'Autor foi salvo com sucesso!');
            })
            .catch((error) => {
                Alert.alert('Erro ao salvar', error.message);
            })
            .finally(() => {

            });
    }

    function handleCancel() {
        navigation.navigate('Home')
    }

    return (

        <KeyboardAvoidingView behavior="padding" style={{ backgroundColor: '#0F171E', flex: 1 }}>
            <View style={estilos.container}>

                <Text style={estilos.label}>Nome</Text>
                <TextInput
                    style={estilos.input}
                    placeholder="Nome do autor"
                    autoCapitalize="words"
                    value={nome}
                    onChangeText={text => setNome(text)}
                />

                <Text style={estilos.label}>E-mail</Text>
                <TextInput
                    style={estilos.input}
                    placeholder="E-mail do autor"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />

                <Text style={estilos.label}>Senha</Text>
                <TextInput
                    style={estilos.input}
                    placeholder="Senha"
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={text => setSenha(text)}
                />

                <View style={estilos.row}>
                    <TouchableNativeFeedback onPress={handleCancel}>
                        <View style={[estilos.btn, estilos.btnDanger]}>
                            <Text style={estilos.btnText}>Cancelar</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={handleSubmit}>
                        <View style={[estilos.btn, estilos.btnPrimary]}>
                            <Text style={estilos.btnText}>Salvar</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>

            </View>
        </KeyboardAvoidingView>
    );
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#0F171E',
        padding: 15,
        justifyContent: 'center'
    },
    label: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15,
        marginBottom: 5,

    },
    input: {
        height: 50,
        flexGrow: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
        color: '#fff',
        backgroundColor: '#1B2530',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        height: 50,
        width: 135,
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
    }

});