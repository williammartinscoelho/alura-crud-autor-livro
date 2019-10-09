import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Image, Button, Alert, TouchableNativeFeedback } from 'react-native';

import user from '../assets/user.png';
import book from '../assets/book.png';

export default function Home({ navigation }) {
    function handleButtonAutorForm() {
        navigation.navigate('AutorForm');
    }

    function handleButtonLivroForm() {
        navigation.navigate('LivroForm');
    }

    function handleButtonAutorList() {
        navigation.navigate('AutoresList');
    }

    function handleButtonLivroList() {
        navigation.navigate('LivrosList');
    }

    return (
        <SafeAreaView style={estilos.container}>
            <View style={estilos.row}>
                <TouchableNativeFeedback onPress={handleButtonAutorForm}>
                    <View style={estilos.card}>
                        <Image source={user} style={estilos.img} />
                        <Text style={estilos.label}>Novo autor</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={handleButtonAutorList}>
                    <View style={estilos.card}>
                        <Image source={user} style={estilos.img} />
                        <Text style={estilos.label}>Autores</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>

            <View style={estilos.row}>
                <TouchableNativeFeedback onPress={handleButtonLivroForm}>
                    <View style={estilos.card}>
                        <Image source={book} style={estilos.img} />
                        <Text style={estilos.label}>Novo livro</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={handleButtonLivroList}>
                    <View style={estilos.card}>
                        <Image source={book} style={estilos.img} />
                        <Text style={estilos.label}>Livros</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F171E',
        padding: 15,
        justifyContent: 'center'
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 19
    },

    card: {
        backgroundColor: '#1B2530',
        borderRadius: 5,
        width: 155,
        height: 155,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: 64,
        width: 64,
        marginBottom: 5,
    },
    label: {
        color: '#fff',
        fontSize: 20,
    }
});