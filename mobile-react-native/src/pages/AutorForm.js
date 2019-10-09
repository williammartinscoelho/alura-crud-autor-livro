import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableNativeFeedback, KeyboardAvoidingView } from 'react-native';

import api from '../api';

export default function AutorForm() {
    return (

        <SafeAreaView style={estilos.container}>
            <View>

                <Text style={estilos.label}>Nome</Text>
                <TextInput
                    style={estilos.input}
                    placeholder="Nome do autor"
                    autoCapitalize="words"
                />

                <Text style={estilos.label}>E-mail</Text>
                <TextInput
                    style={estilos.input}
                    placeholder="E-mail do autor"
                    keyboardType="email-address"
                />

                <Text style={estilos.label}>Senha</Text>
                <TextInput
                    style={estilos.input}
                    placeholder="Senha"
                    secureTextEntry={true}
                />

                <View style={estilos.row}>
                    <TouchableNativeFeedback >
                        <View style={[estilos.btn, estilos.btnDanger]}>
                            <Text style={estilos.btnText}>Cancelar</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback >
                        <View style={[estilos.btn, estilos.btnPrimary]}>
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