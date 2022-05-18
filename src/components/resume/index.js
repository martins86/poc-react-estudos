import React from 'react';

import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign
} from 'react-icons/fa';

import Card from '../card';

import * as C from './styles';

const Resume = ({ income, expense, total }) => {

    return (
        <C.Container>
            <Card Title="Entradas" Icon={FaRegArrowAltCircleUp} Value={income} />
            <Card Title="Saídas" Icon={FaRegArrowAltCircleDown} Value={expense} />
            <Card Title="Total" Icon={FaDollarSign} Value={total} />
        </C.Container>
    );
};

export default Resume;