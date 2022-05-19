import React from 'react';

import {
    FaRegArrowAltCircleDown,
    FaRegArrowAltCircleUp,
    FaTrash
} from 'react-icons/fa';

import * as C from './styles';

const TableItem = ({ item, onDelete }) => {
    const formatReais = (amount) => {
        const newAmount = Number(amount).toFixed(2);

        return `R$ ${newAmount}`;
    };

    return (
        <C.Tr>
            <C.Td>{item.desc}</C.Td>
            <C.Td>{formatReais(item.amount)}</C.Td>
            <C.Td alignCenter>
                {
                    item.expense ? (
                        <FaRegArrowAltCircleDown title="Saída" color="red" />
                    ) : (
                        <FaRegArrowAltCircleUp title="Entrada" color="green" />
                    )
                }
            </C.Td>
            <C.Td alignCenter cursorPointer>
                <FaTrash title="Remover item" onClick={() => onDelete(item.id)} color="orangered" />
            </C.Td>
        </C.Tr>
    );
};

export default TableItem;