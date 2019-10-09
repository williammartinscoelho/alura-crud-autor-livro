import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, Alert } from 'react-native';

import api from '../api';

import book from '../assets/book.png';

export default function LisvrosList({ navigation }) {
    const [livros, setLivros] = useState([]);

    function to_money(value) {
        return value.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL"
        });
    }

    useEffect(() => {
        function loadLivros() {
            console.log('Carregando livros...');
            api.get('/livros')
                .then((response) => {
                    setLivros(response.data.sort(function (a, b) {
                        if (a.titulo.toLowerCase() > b.titulo.toLowerCase()) {
                            return 1;
                        }
                        if (a.titulo.toLowerCase() < b.titulo.toLowerCase()) {
                            return -1;
                        }
                        // a must be equal to b
                        return 0;
                    }));

                    console.log('Livros carregado!');
                })
                .catch((error) => {
                    Alert.alert('Erro ao buscar da api!', error.message);
                    navigation.navigate('Home');

                    console.log(error.message);
                });
        }

        loadLivros();
    }, []);

    return (
        <SafeAreaView style={estilos.container}>
            <FlatList
                data={livros}
                renderItem={({ item }) => (
                    <View style={estilos.card}>
                        <View>
                            <View style={estilos.boxImg}>
                                <Image source={book} style={estilos.img} />
                            </View>
                        </View>

                        <View style={{ flexGrow: 1, paddingHorizontal: 10 }}>
                            <Text style={estilos.titulo}>{item.titulo}</Text>
                            <Text style={estilos.nomeAutor}>{item.autor.nome}</Text>
                        </View>

                        <View>
                            <Text style={estilos.preco}>
                                {item.preco.toLocaleString("pt-BR", {
                                    minimumFractionDigits: 2,
                                    style: "currency",
                                    currency: "BRL"
                                })}
                            </Text>
                        </View>

                    </View>

                )}
            />
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F171E',
        padding: 15,
    },

    card: {
        backgroundColor: '#1B2530',
        borderRadius: 15,
        marginBottom: 20,
        flexDirection: 'row',
        padding: 15
    },
    boxImg: {
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(000, 170, 255, 0.2)'
    },
    img: {
        height: 30,
        width: 30
    },
    titulo: {
        color: '#fff',
        flexWrap: 'wrap',
    },
    nomeAutor: {
        color: '#fff'
    },
    preco: {
        color: '#fff'
    }
});