import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/pages/Home';
import AutoresList from './src/pages/AutoresList';
import LivrosList from './src/pages/LivrosList';
import AutorForm from './src/pages/AutorForm';
import LivroForm from './src/pages/LivroForm';

const estiloHeader = {
    headerStyle: {
        backgroundColor: '#00AAE1'
    },
    headerTitleStyle: {
        color: '#FFF'
    }
}

const appNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: `Home`,
            ...estiloHeader
        }
    },
    AutoresList: {
        screen: AutoresList,
        navigationOptions: {
            title: "Lista de autores",
            ...estiloHeader
        }
    },
    LivrosList: {
        screen: LivrosList,
        navigationOptions: {
            title: "Lista de livros",
            ...estiloHeader
        }
    },
    AutorForm: {
        screen: AutorForm,
        navigationOptions: {
            title: "Novo autor",
            ...estiloHeader
        }
    },
    LivroForm: {
        screen: LivroForm,
        navigationOptions: {
            title: "Novo livro",
            ...estiloHeader
        }
    },
});

export default createAppContainer(appNavigator);