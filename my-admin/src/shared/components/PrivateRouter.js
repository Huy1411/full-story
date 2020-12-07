import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import {connect} from 'react-redux'

const PrivateRoute = ({children,isLogin, ...rest})=> {
    return (
        <Route
            {...rest}
            render =  {()=>{
                return isLogin ? (children) : (
                    <Redirect to={{pathname: "/login"}}/>
                )
            }}>
        </Route>
    );
}

function mapStateToProps({auth}) {
    return{
        isLogin: auth.isLogin
    }
}

export default connect(mapStateToProps) (PrivateRoute);