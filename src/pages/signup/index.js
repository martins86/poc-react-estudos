import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useAuth from './../../hooks/use-auth';

import Input from './../../components/input/index';
import Button from './../../components/button/index';

import * as C from './styles';

const SignUp = () => {
    const { signUp } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [emailConf, setEmailConf] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSingUp = () => {
        if (!email || !emailConf || !password) {
            setError('Preencha todos os campos');
            return;
        } else if (email !== emailConf) {
            setError('Os e-mails não são iguais');
            return;
        }

        const res = signUp(email, password);

        if (res) {
            setError(res);
            return;
        }

        alert('Usuário cadastrado com sucesso!');
        navigate('/');
    };

    return (
        <C.Container>
            <C.Label>SISTEMA DE REGISTRO</C.Label>
            <C.Content>
                <Input
                    type='email'
                    placeholder='Digite seu E-mail'
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError('')]}
                />
                <Input
                    type='email'
                    placeholder='Confirme seu E-mail'
                    value={emailConf}
                    onChange={(e) => [setEmailConf(e.target.value), setError('')]}
                />
                <Input
                    type='password'
                    placeholder='Digite sua Senha'
                    value={password}
                    onChange={(e) => [setPassword(e.target.value), setError('')]}
                />
                <C.LabelError>{error}</C.LabelError>
                <Button text='Inscrever-se' onClick={handleSingUp} />
                <C.LabelSignUp>
                    Já tem uma conta?
                    <C.Strong>
                        <Link to='/'>Entrar</Link>
                    </C.Strong>
                </C.LabelSignUp>
            </C.Content>
        </C.Container>
    );
};

export default SignUp;