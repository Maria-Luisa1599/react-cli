import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Column = styled.div`
    flex: 1;
`

export const Title = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;

    width: 320px;
    margin-bottom: 20px;
    margin-top: 0;
    color: #FFFFFF;
`

export const Form = styled.div`
    width: 45%;

    hr {
        border: none;
        height: 1px;
        background-color: rgba(59, 52, 80, 1);
        margin: 16px 0;
  }
`

export const FormHeader = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;

    margin-bottom: 20px;
`

export const SubtitleFormHeader = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;

    margin-bottom: 35px;
`

export const Text = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: Regular;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;

    margin: 20px 0 35px 0;

    width: 50%;
`

export const SubtitleText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;

    a{
    text-decoration: none;
    color: #20C6A1;
}
`