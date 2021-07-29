import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// Components
import Home from '../src/page/Home'
import MainLayout from "./layout/MainLayout";

import './theme/theme.sass'

function App() {
    return (
        <MainLayout>
            <BrowserRouter>
                <Switch>
                    <Route path={"/"} component={Home}/>
                </Switch>
            </BrowserRouter>
        </MainLayout>
    );
}

export default App;
