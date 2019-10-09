import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/pages/Home';
import AutoresList from './src/pages/AutoresList';
import LivrosList from './src/pages/LivrosList';
import AutorForm from './src/pages/AutorForm';
import LivroForm from './src/pages/LivroForm';

const appNavigator = createStackNavigator({
    Home,
    AutoresList,
    LivrosList,
    AutorForm,
    LivroForm
});

export default createAppContainer(appNavigator);