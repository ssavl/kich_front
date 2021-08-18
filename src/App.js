import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Provider} from "react-redux";
import store from './store'

// Components
import Home from '../src/page/Home'
import MainLayout from "./layout/MainLayout";
import PersonalAccount from "./page/PersonalAccount";
import MensClothing from "./page/MensClothing";
import WomensClothing from "./page/WomensClothing";
import Accessories from './page/Accessories'

// Routs
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";

import './theme/theme.sass'

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <MainLayout>
                    <Switch>
                        <PublicRoutes exact path={["/", '/login']} component={Home}/>
                        <PublicRoutes exact path={'/mens'} component={MensClothing} />
                        <PublicRoutes exact path={'/accessories'} component={Accessories} />
                        <PrivateRoutes exact path={'/womens'} component={WomensClothing} />
                        <PrivateRoutes exact path={'/profile'} component={PersonalAccount}/>
                    </Switch>
                </MainLayout>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
