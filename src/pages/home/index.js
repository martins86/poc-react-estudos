import React from 'react';

import Header from './../../components/header/index';
import Resume from '../../components/resume';

import * as C from './styles';

const Home = () => {
    return (
        <C.Container>
            <Header />
            <Resume />
        </C.Container>
    );
};

export default Home;