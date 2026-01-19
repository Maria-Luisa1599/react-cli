import { Link } from "react-router-dom";
import Button from "../../components/Button";
import bannerImage from "../../assets/banner.png";
import Header from "../../components/Header";
import { Container, TextContent, Title, TitleHighLight } from "./styles";

const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHighLight>
                            Implemente
                            <br/>
                        </TitleHighLight> 
                        O seu futuro global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Link to="/login">
                        <Button title="Começar agora" variant="secondary" onClick={() => null} />
                    </Link>
                </div>
                <div>
                    <img src={bannerImage} alt="Imagem principal" />
                </div>
            </Container>         
        </>)
}

export { Home };
      