import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1120px;
    width: 92%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 3px 2px 4px 1px #00000054;
    gap: 10px;

    @media (max-width: 750px) {
        display: grid;
    }
`;

export const Label = styled.label``;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    width: 210px;

    input {
        margin-left: 20px;
        margin-right: 5px;
        accent-color: #ff5858;
        margin-top: 0;
    }
`;

export const Input = styled.input`
    outline: none;
`;

export const ButtonContent = styled.div`
    display: flex;
    padding: 15px
`;
