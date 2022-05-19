import React, { useState, useEffect } from 'react';

import Header from './../../components/header/index';
import Resume from '../../components/resume';
import Form from '../../components/form';

import * as C from './styles';
import Table from '../../components/table';

const Home = () => {
    const dataStorage = localStorage.getItem('transactions');
    const [transactionList, setTransactionList] = useState(
        dataStorage ? JSON.parse(dataStorage) : []
    );
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const amountExpense = transactionList
            .filter((item) => item.expense)
            .map((transaction) => Number(transaction.amount));

        const amountIncome = transactionList
            .filter((item) => !item.expense)
            .map((transaction) => Number(transaction.amount));

        const expenseValue = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const incomeValue = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

        const totalValue = Math.abs(incomeValue - expenseValue).toFixed(2);

        setIncome(`R$ ${incomeValue}`);
        setExpense(`R$ ${expenseValue}`);
        setTotal(`${Number(incomeValue) < Number(expenseValue) ? "-" : ""} R$ ${totalValue}`);

    }, [transactionList]);

    const handleAdd = (transaction) => {
        const newArrayTransactions = [...transactionList, transaction];

        setTransactionList(newArrayTransactions);

        localStorage.setItem('transactions', JSON.stringify(newArrayTransactions));
    };

    const showTable = () => {
        if (transactionList?.length > 0) {
            return <Table transactionList={transactionList} setTransactionList={setTransactionList} />;
        }
    }

    return (
        <C.Container>
            <Header />
            <Resume income={income} expense={expense} total={total} />
            <Form handleAdd={handleAdd} />
            <>
                {
                    showTable()
                }
            </>
        </C.Container>
    );
};

export default Home;