import React from 'react';

import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign
} from 'react-icons/fa';

import Card from '../card';

import * as C from './styles';

const Resume = () => {
    return (
        <C.Container>
            <Card Title="Entradas" Icon={FaRegArrowAltCircleUp} Value="1000" />
            <Card Title="Saídas" Icon={FaRegArrowAltCircleDown} Value="1000" />
            <Card Title="Total" Icon={FaDollarSign} Value="1000" />
        </C.Container>
    );
};

export default Resume;