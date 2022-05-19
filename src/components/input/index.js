import React from 'react';

import * as C from './styles';

const Input = ({ type, fieldName, placeholder, value, onChange, onKeyDown, autoComplete }) => {
    return <C.Input
        value={value}
        name={fieldName}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
    />;
};

export default Input;