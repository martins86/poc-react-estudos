import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    padding: 15px 24px;
    width: 100%;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#b4df5b+47,f2f2f2+100 */
    background: #b4df5b; /* Old browsers */
    background: -moz-linear-gradient(-45deg,  #b4df5b 47%, #f2f2f2 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(-45deg,  #b4df5b 47%,#f2f2f2 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(135deg,  #b4df5b 47%,#f2f2f2 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b4df5b', endColorstr='#f2f2f2',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
`;

export const Header = styled.h1``;
export const Title = styled.div`
    padding-top: 20px;
    color: #fff;
`;

export const SignOut = styled.div`
    width: 95px;
`;
