import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, Alert } from 'react-native';

import api from '../api';

import book from '../assets/book.png';

export default function LisvrosList({ navigation }) {
    const [loading, setLoading] = useState(true);

    const [livros, setLivros] = useState([]);

    useEffect(() => {
        function loadLivros() {
            console.log('Carregando livros...');
            setLoading(true);

            api.get('/livros')
                .then((response) => {
                    setLivros(response.data.reverse());
                    console.log('Livros carregado!');
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

        loadLivros();
    }, []);

    return (
        <SafeAreaView style={estilos.container}>
            <Text style={loading ? estilos.mostrarLoading : { display: 'none' }}>
                Carregando dados...
            </Text>

            <FlatList
                style={loading ? { display: 'none' } : { display: 'flex' }}
                data={livros}
                renderItem={({ item }) => (
                    <View style={estilos.card} key={item.id}>
                        <View>
                            <View style={estilos.boxImg}>
                                <Image source={book} style={estilos.img} />
                            </View>
                        </View>

                        <View style={{ flexGrow: 1, paddingHorizontal: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={estilos.titulo}>{item.titulo}</Text>
                            </View>

                            <Text style={estilos.nomeAutor}>{item.autor.nome}</Text>
                        </View>

                        <View>
                            <Text style={estilos.preco}>
                                {'R$ ' + item.preco.toFixed(2).replace('.', ',')}
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
        backgroundColor: '#0F171E'
    },

    card: {
        backgroundColor: '#1B2530',
        borderRadius: 15,
        marginHorizontal: 15,
        marginVertical: 10,
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
        flex: 1,
        fontSize: 18,
    },
    nomeAutor: {
        color: '#999'
    },
    preco: {
        color: '#fff',
        fontSize: 18,
    },
    mostrarLoading: {
        display: 'flex',
        color:'#fff',
        fontSize: 18,
        padding: 20,
        alignSelf: 'center'
    }
});