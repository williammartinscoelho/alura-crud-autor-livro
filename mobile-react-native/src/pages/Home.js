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
            {/* <View style={estilos.row}>
                <TouchableNativeFeedback onPress={handleButtonAutorForm}>
                    <View style={[estilos.card, {marginRight: 10}]}>
                        <Image source={user} style={estilos.img} />
                        <Text style={estilos.label}>Novo autor</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={handleButtonAutorList}>
                    <View style={[estilos.card, {marginLeft: 10}]}>
                        <Image source={user} style={estilos.img} />
                        <Text style={estilos.label}>Autores</Text>
                    </View>
                </TouchableNativeFeedback>
        
                <TouchableNativeFeedback onPress={handleButtonLivroForm}>
                    <View style={[estilos.card, {marginRight: 10}]}>
                        <Image source={book} style={estilos.img} />
                        <Text style={estilos.label}>Novo livro</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={handleButtonLivroList}>
                    <View style={[estilos.card, {marginLeft: 10}]}>
                        <Image source={book} style={estilos.img} />
                        <Text style={estilos.label}>Livros</Text>
                    </View>
                </TouchableNativeFeedback>
            </View> */}

            <View style={estilos.content}>
                <View style={estilos.cardBox}>
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
            </View>

            <View style={estilos.footer}>
                <Text style={estilos.footerText}> © 2019 - William Martins</Text>
            </View>
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F171E',
        paddingVertical: 15,
    },

    content: {
        //backgroundColor: 'red',
        flex: 1,
        justifyContent: "center"
    },

    cardBox: {
        //backgroundColor: 'green',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    card: {
        backgroundColor: '#1B2530',
        borderRadius: 10,
        paddingVertical: 20,
        margin: 10,
        flex: 1,
        flexBasis: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        height: 64,
        width: 64,
        marginBottom: 5,
    },
    label: {
        color: '#fff',
        fontSize: 20,
    },

    footer: {
        alignItems: 'center',
        //backgroundColor: 'blue'
    },

    footerText: {
        color: "#FFF"
    }


});