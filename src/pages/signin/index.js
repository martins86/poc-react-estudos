import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useAuth from './../../hooks/use-auth';

import Input from './../../components/input/index';
import Button from './../../components/button/index';

import * as C from './styles';

const SignIn = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            setError('* Preencha todos os campos');
            return;
        }

        const res = signIn(email, password);

        if (res) {
            setError(res);
            return;
        }

        navigate('/home');
    }

    return (
        <C.Container>
            <C.Label>SISTEMA DE LOGIN</C.Label>
            <C.Content>
                <Input
                    type='email'
                    name="email"
                    placeholder='Digite seu E-mail'
                    value={email || ''}
                    autoComplete='on'
                    onChange={(e) => [setEmail(e.target.value), setError('')]}
                />
                <Input
                    type='password'
                    name="password"
                    placeholder='Digite sua Senha'
                    value={password || ''}
                    onChange={(e) => [setPassword(e.target.value), setError('')]}
                />
                <C.LabelError>{error}</C.LabelError>
                <Button text='Entrar' onClick={handleLogin} />
                <C.LabelSignUp>
                    Não tem uma conta?
                    <C.Strong>
                        <Link to='/signup'>Registre-se</Link>
                    </C.Strong>
                </C.LabelSignUp>
            </C.Content>
        </C.Container>
    );
};

export default SignIn;