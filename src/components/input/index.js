import React from 'react';

import * as C from './styles';

const Input = ({ type, placeholder, value, onChange, onKeyDown }) => {
    return <C.Input
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type={type}
        placeholder={placeholder}
    />;
};

export default Input;