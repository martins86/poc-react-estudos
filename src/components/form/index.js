import React, { useState } from 'react';

import Button from './../../components/button';
import Input from './../../components/input';

import * as C from './styles';

function Form({handleAdd}) {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);
    const [symbolsArr] = useState(["e", "E", "+", "-"]);

    const generateID = () => Math.round(Math.random() * 10000);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
            return;
        } else if (amount < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense
        };

        handleAdd(transaction);

        setDesc('');
        setAmount('');
    };

    return (
        <C.Container>
            <C.InputContent>
                <C.Label>Descrição</C.Label>
                <Input
                    value={desc}
                    name="desc"
                    type="text"
                    placeholder="Transação realizada..."
                    onChange={(e) => setDesc(e.target.value)} />
            </C.InputContent>
            <C.InputContent>
                <C.Label>Valor</C.Label>
                <Input
                    value={amount}
                    name="amount"
                    type="number"
                    min="1"
                    placeholder="0.00"
                    onKeyDown={(e) => symbolsArr.includes(e.key) && e.preventDefault()}
                    onChange={(e) => setAmount(e.target.value)} />
            </C.InputContent>
            <C.RadioGroup>
                <C.InputRadio
                    type="radio"
                    id="rIncome"
                    defaultChecked
                    name="group1"
                    onChange={() => setExpense(!isExpense)}
                />
                <C.Label htmlFor="rIncome">Entrada</C.Label>
                <C.InputRadio
                    type="radio"
                    id="rExpenses"
                    name="group1"
                    onChange={() => setExpense(!isExpense)}
                />
                <C.Label htmlFor="rExpenses">Saída</C.Label>
            </C.RadioGroup>
            <C.ButtonContent>
                <Button text='Adicionar' onClick={handleSave} />
            </C.ButtonContent>
        </C.Container>
    );
}

export default Form;