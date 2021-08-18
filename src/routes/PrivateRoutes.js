import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Route, useHistory} from 'react-router-dom'
import {connect} from "react-redux";
import axios from "axios";
import {setUser} from '../redux/actions/auth'

const PrivateRoutes = ({component: Component, username, setUser, ...rest}) => {

    const history = useHistory();


    useEffect(() => {
        console.log('Render Privat Route', rest)
        if (localStorage.getItem('token') && !username) {
            axios.post('http://127.0.0.1:8000/api/v1/check_user/', {
                token: localStorage.getItem('token')
            })
                .then(response => {
                    setUser(
                        response.data.id,
                        response.data.username,
                        response.data.first_name,
                        response.data.last_name,
                        response.data.email,
                        response.data.img);
                })
        }
    }, [])

    //     .catch(error) {
    //     if (error.response.status === 401) {
    //         console.log(error)
    //         history.push('/login')
    //     }
    //
    // }

    if (!username && !localStorage.getItem('token')) {
        history.push('/login');
        return null;
    }
    return (
        <>
            <Route component={Component} {...rest} />
        </>
    );
}
;

PrivateRoutes.propTypes =
{
};

const mapStateToProps = state => (
{
    username: state.authReducer.auth.username,
}
)

export default connect(mapStateToProps,
{
    setUser
}
)(PrivateRoutes)