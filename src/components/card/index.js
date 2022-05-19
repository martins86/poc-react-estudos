import React from 'react';

import * as C from './styles';

function Card({ Title, Icon, Color, Value }) {
    return (
        <C.Container>
            <C.Header>
                <C.HeaderTitle>{Title}</C.HeaderTitle>
                <Icon color={Color} />
            </C.Header>
            <C.Total>
                {Value}
            </C.Total>
        </C.Container>
    );
}

export default Card;