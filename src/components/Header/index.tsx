import React from 'react';
import logo from "../../assets/logo-dio.png";
import Button from '../Button';
import { Link, useNavigate } from "react-router-dom";


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
import { useAuth } from '../../hooks/useAuth';



 const Header = () => {

  const { user, handleSignOut } = useAuth();
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
          <Link to="/">
            <img src={logo} alt="DIO Logo" />
          </Link>
          {user.id ? (
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
          {user.id ? (
            <>
              <UserPicture src="https://avatars.githubusercontent.com/u/98129683?v=4"/>
              <button onClick={handleSignOut}>Sair</button>
            </>
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