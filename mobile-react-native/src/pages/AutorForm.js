import React, { useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet,
    TextInput,
    Text,
    TouchableNativeFeedback,
    View,
} from 'react-native';

import api from '../api';

export default function AutorForm({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [labelBtn, setLabelBtn] = useState('Salvar');



    function handleSubmit() {
        Keyboard.dismiss();
        setLabelBtn('Salvando...');
        setLoadingSubmit(true);

        const data = {
            "nome": nome,
            "email": email,
            "senha": senha
        }

        api.post('/autores', data)
            .then(() => {
                Alert.alert('Salvo', 'Autor foi salvo com sucesso!');
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
        setNome('');
        setEmail('');
        setSenha('');
    }

    return (
        <SafeAreaView style={estilos.container}>
            <KeyboardAvoidingView behavior="padding" style={estilos.content}>


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
        flex: 1,
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

    row: {
        flexDirection: 'row',
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
    }
});