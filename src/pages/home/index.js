import React from 'react';

import Header from './../../components/header/index';

import * as C from './styles';

const Home = () => {
    return (
        <C.Container>
            <Header />
            <C.Title>Home</C.Title>
        </C.Container>
    );
};

export default Home;