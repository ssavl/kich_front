import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom'

const PublicRoutes = ({component: Component, ...rest}) => {
    return (
        <>
            <Route component={Component} {...rest} />
        </>
    );
};

PublicRoutes.propTypes = {};

export default PublicRoutes;