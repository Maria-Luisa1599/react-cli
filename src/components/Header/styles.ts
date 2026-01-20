import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 47px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  `

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    button{
        width: 60px;
        height: 25px;

        border-radius: 4px;
        border: none;
        font-size: 14px;
        background-color: #696969;
        color: white;
    }
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 47px;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const BuscarInputContainer = styled.div`
    width: 175px;
    height: 30px;
    background-color: #2D2D37;
    border-radius: 8px;    
    padding: 2px 5px;
    margin: 0 12px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Menu = styled.a`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-size: 16px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;
`

export const MenuRight = styled.a`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;
`

export const UserPicture = styled.img`
    width: 32px;    
    height: 32px;
    border-radius: 22px;
    border: 2px solid #FFFFFF;
    margin-right: 15px;
`

export const Input = styled.input`
    background-color: transparent;
    flex: 1;
    height: 30px;
    border: 0;
    color: #FFFFFF;
    outline: none;
    `
