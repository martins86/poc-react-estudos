import React from 'react';

import * as C from './styles';

const Button = ({ text, onClick, type = 'button' }) => {
    return <C.Button type={type} onClick={onClick}>
        {text}
    </C.Button>;
};

export default Button;