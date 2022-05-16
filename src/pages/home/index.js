import React from 'react';
import { useNavigate } from 'react-router-dom';

import useAuth from './../../hooks/use-auth';

import Button from './../../components/button';

import * as C from './styles';

const Home = () => {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    return (
        <C.Container>
            <C.Title>Home</C.Title>
            <Button text='Sair' onClick={() => [signOut(), navigate('/')]} />
        </C.Container>
    );
};

export default Home;