import React from 'react';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/use-auth';

import * as C from './styles';

import Button from './../../components/button';

const Header = () => {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    return <C.Container>
        <C.Header>
            <C.Title>Controle Financeiro</C.Title>
        </C.Header>
        <C.SignOut>
            <Button text='Sair' onClick={() => [signOut(), navigate('/')]} />
        </C.SignOut>
    </C.Container>;
};

export default Header;