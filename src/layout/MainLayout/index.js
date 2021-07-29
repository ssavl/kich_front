import React from 'react';
import PropTypes from 'prop-types';

import './styles.sass'

// Components
import Header from "../Header";
import Content from "../Content";
import Footer from "../Footer";


const MainLayout = ({children}) => {
    return (
        <div className={'MainLayout'}>
            <Header/>
            <Content>
                {children}
            </Content>
            <Footer/>
        </div>
    );
};

MainLayout.propTypes = {
    
};

export default MainLayout;