import React from 'react';

import TableItem from './../table-item';

import * as C from './styles';

const Table = ({ transactionList, setTransactionList }) => {
    const onDelete = (ID) => {
        const newArray = transactionList.filter((transaction) => transaction.id !== ID);
        setTransactionList(newArray);
        localStorage.setItem('transactions', JSON.stringify(newArray));
    };

    return (
        <C.Container>
            <C.Table>
                <C.Thead>
                    <C.Tr>
                        <C.Th width={50}>Descrição</C.Th>
                        <C.Th width={30}>Valor</C.Th>
                        <C.Th width={10} alignCenter>Tipo</C.Th>
                        <C.Th width={10} alignCenter>Ações</C.Th>
                    </C.Tr>
                </C.Thead>
                <C.Tbody>
                    {
                        transactionList?.map(
                            (item, index) => (
                                <TableItem key={index} item={item} onDelete={onDelete} />
                            ))
                    }
                </C.Tbody>
            </C.Table>
        </C.Container>

    );
};

export default Table;