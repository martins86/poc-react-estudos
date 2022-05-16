import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './private-route';

import Home from '../pages/home';
import SignIn from '../pages/signin';
import SignUp from '../pages/signup';

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path='/home' element={<PrivateRoute Item={Home} SignIn={SignIn} />} />
                    <Route path='/' element={<SignIn />} />
                    <Route exact path='/signup' element={<SignUp />} />

                    <Route path='*' element={<SignIn />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;