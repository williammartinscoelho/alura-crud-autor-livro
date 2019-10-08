import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/index';
import Autores from './pages/Autores/index';
import Livros from './pages/Livros/index';

export default function Routes() {
    return (

        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/livros" exact component={Livros} />
            <Route path="/autores" exact component={Autores} />
        </Switch>

    );
}