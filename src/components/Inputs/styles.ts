import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px
    border-bottom: 1px solid #FFFFFF;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const IconContainer = styled.div`
    margin-right: 10px;

    svg{
        color: rgba(134, 71, 173, 1);
    }
`;

export const InputText = styled.input`
    height: 30px;
    border: 0;
    width: 100%;
    background-color: transparent;
    color: #FFFFFF;    

    `;

export const ErrorText = styled.p`
    color: #FF2000;
    font-size: 12px;
    margin: -10px 0 20px 0;
`
