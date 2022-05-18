import React from 'react';

import * as C from './styles';

function Card({ Title, Icon, Value }) {
    return (
        <C.Container>
            <C.Header>
                <C.HeaderTitle>{Title}</C.HeaderTitle>
                <Icon />
            </C.Header>
            <C.Total>
                {Value}
            </C.Total>
        </C.Container>
    );
}

export default Card;