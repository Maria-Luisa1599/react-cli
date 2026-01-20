import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

// import { api } from "../../services/api"
import { Input } from "../../components/Inputs";
import Button from "../../components/Button";
import Header from "../../components/Header";

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "./style";
import { MdEmail, MdLock } from 'react-icons/md'

import { ILoginForm } from "./types";
import { useAuth } from "../../hooks/useAuth";

const schema = yup.object({
    email: yup.string().email('Esse email não é valido').required('Campo obrigatório.'),
    password: yup.string().min(4, 'No mínimo 4 caracteres').required('Campo obrigatório.'),
}).required();


const Login = () => {
    const { handleLogin } = useAuth();
    const navigate = useNavigate();

    const handleCreateAccontSubmit = () => {
        navigate('/cadastro')
    }

    const { control, handleSubmit, formState: { errors } } = useForm<ILoginForm>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = async (formData: ILoginForm) => {
        handleLogin(formData);
    };

    console.log(errors)
    return (
        <>
            <Header />
            <Container />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>

                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" control={control} errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={<MdEmail />} />
                            <hr />
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                            <Button title="Entrar" variant="secondary" />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText onClick={handleCreateAccontSubmit}>Criar conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>)
}

export { Login };
