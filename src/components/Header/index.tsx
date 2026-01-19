import React from 'react';
import logo from "../../assets/logo-dio.png";
import Button from '../Button';
import { useNavigate } from "react-router-dom";

import { IHeader } from "./types"

import { 
  Container,
  Row,
  Wrapper,
  BuscarInputContainer,
  Menu,
  MenuRight,
  Input,
  UserPicture
 } from './styles'



 const Header = ({autenticado}: IHeader) => {
   const navigate = useNavigate();

   const handleSubmitEntrar = () =>{
       navigate('/login') 
   }

   const handleSubmitCadastrar = () =>{
       navigate('/cadastro') 
   }
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="DIO Logo" />
          {autenticado ? (
            <>        
            <BuscarInputContainer>
              <Input placeholder="Buscar..."/>
            </BuscarInputContainer>
            <Menu href="#">Live Code</Menu>
            <Menu href="#">Global</Menu>
            </>
          ) : null }
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/98129683?v=4"/>
          ) : (
            <>
            <MenuRight href="#">Home</MenuRight>
            <Button onClick={handleSubmitEntrar} className="btnEntrar" title="Entrar"/>
            <Button onClick={handleSubmitCadastrar} title="Cadastrar"/>
            
            </>

          )}
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Header;