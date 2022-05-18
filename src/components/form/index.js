import React, { useState } from 'react';

import Button from './../../components/button';
import Input from './../../components/input';

import * as C from './styles';

function Form() {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);
    const [symbolsArr] = useState(["e", "E", "+", "-"]);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
        } else if (amount < 1) {
            alert("O valor tem que ser positivo!");
        }
    };

    return (
        <C.Container>
            <C.InputContent>
                <C.Label>Descrição</C.Label>
                <Input
                    value={desc}
                    type="text"
                    placeholder="Descrição breve..."
                    onChange={(e) => setDesc(e.target.value)} />
            </C.InputContent>
            <C.InputContent>
                <C.Label>Valor</C.Label>
                <Input
                    value={amount}
                    type="number"
                    min="1"
                    step="0.01"
                    placeholder="0"
                    onKeyDown={(e) => symbolsArr.includes(e.key) && e.preventDefault()}
                    onChange={(e) => setAmount(e.target.value.replace(/\D/g, ""))} />
            </C.InputContent>
            <C.RadioGroup>
                <C.Input
                    type="radio"
                    id="rIncome"
                    defaultChecked
                    name="group1"
                    onChange={() => setExpense(!isExpense)}
                />
                <C.Label htmlFor="rIncome">Entrada</C.Label>
                <C.Input
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