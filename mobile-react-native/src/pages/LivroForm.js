import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Picker, Alert, TouchableNativeFeedback } from 'react-native';

export default function LivroForm() {
    const [titulo, setTitulo] = useState('');
    const [preco, setPreco] = useState('');
    const [autorId, setAutorId] = useState('');
    const [autorName, setAutorName] = useState('');


    return (
        <SafeAreaView style={estilos.container}>
            <View>

                <Text style={estilos.label}>Titulo</Text>
                <TextInput
                    style={estilos.input}
                    placeholder="Titulo do livro"
                    autoCapitalize="sentences"

                />

                <Text style={estilos.label}>Preço</Text>
                <TextInput
                    style={estilos.input}
                    placeholder="Preço do livro"
                    keyboardType="numeric"
                />

                <Text style={estilos.label}>Autor</Text>
                <Picker
                    selectedValue={autorName}
                    style={estilos.input}
                    onValueChange={(itemValue, itemIndex) =>
                        setAutorName(itemValue)
                    }
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>



                <View style={estilos.row}>
                    <TouchableNativeFeedback >
                        <View style={[estilos.btn, estilos.btnDanger]}>
                            <Text  style={estilos.btnText}>Cancelar</Text>
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
        height: 42,
        flexGrow: 1,
        paddingHorizontal: 10,
        marginBottom: 25,
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