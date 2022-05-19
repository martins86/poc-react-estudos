import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1120px;
    width: 92%;
    margin: 20px auto;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 3px 2px 4px 1px #00000054;
`;

export const Table = styled.table`
    width: 98%;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
    border-bottom: inset;
    padding-bottom: 8px;
    text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
    width: ${(props) => (props.width ? props.width + '%' : 'auto')};
`;
