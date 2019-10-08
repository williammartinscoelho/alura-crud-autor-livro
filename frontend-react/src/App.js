import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes.js';
import SideBar from './components/SideBar';

import './App.css';
import './assets/css/pure-min.css';
import './assets/css/side-menu.css';

function App() {
    return (
        <div id="layout">
            <a href="#menu" id="menuLink" className="menu-link">
                <span></span>
            </a>
            <BrowserRouter>
                <SideBar />

                <div id="main">
                    <Routes />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
