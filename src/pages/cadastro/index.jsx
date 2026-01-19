import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Container, Form, Column, Title, FormHeader, SubtitleFormHeader, SubtitleText, Text } from "./style";

import Header from "../../components/Header";
import { Input } from "../../components/Inputs";
import Button from "../../components/Button";

import { MdAccountCircle, MdEmail, MdLock } from 'react-icons/md'


const schema = yup.object({
    user: yup.string().required('Campo obrigatório.'),
    email: yup.string().email('Esse email não é valido').required('Campo obrigatório.'),
    password: yup.string().min(4, 'No mínimo 4 caracteres').required('Campo obrigatório.'),
}).required();


const Cadastro = () => {
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors }  } = useForm({
             resolver: yupResolver(schema),
             mode: 'onChange'
            });
                
        console.log(errors)


        const onSubmit = () => {
            navigate('/feed') 
        }
        
  return (
    <>
      <Header />
    <Container />
    <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>

        <Column>
          <Form>
            <FormHeader>Comece agora grátis</FormHeader>
            <SubtitleFormHeader>Crie sua conta e make the change._</SubtitleFormHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="user" control={control} errorMessage={errors?.user?.message} placeholder="Nome Completo" leftIcon={<MdAccountCircle/>}/>
                <hr/>
                <Input name="email" control={control} errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={<MdEmail/>}/>
                <hr/>
                <Input name="password" control={control} errorMessage={errors?.password?.message} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                <Button title="Criar minha conta" variant="secondary"/>
            </form>
          </Form>
          <Text>
            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
          </Text>
          <SubtitleText>
                Já tenho conta. <a href="../login">Fazer login</a>
          </SubtitleText>
        </Column>

      </Container>
    </>
  );
};

export { Cadastro };
