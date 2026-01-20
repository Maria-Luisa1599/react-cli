import Header from "../../components/Header";
import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";
import { Container, Column, Title, TitleHighlight } from "./style";


const Feed = () => {
    
    return (
        <>
            <Header/>
            <Container>
                <Column flex={3}>
                <Title>Feed</Title>
                    <Card src='https://alonza.com.br/wp-content/uploads/2023/08/projetos-em-html.webp'/>
                    <Card src='https://i.pinimg.com/736x/57/ea/89/57ea898844b18668b14be3a189928999.jpg'/>
                    <Card src='https://i.pinimg.com/736x/75/4d/8e/754d8e5a03434f36dae2082b7709cce8.jpg'/>
                    <Card src='https://i.pinimg.com/736x/e8/aa/0a/e8aa0a823d182e67d2a339fa6766ba2b.jpg'/>
                    <Card src='https://i.pinimg.com/1200x/ae/9a/a9/ae9aa9ac9a2f6cc5aab13940e71cac03.jpg'/>
                    <Card src='https://i.pinimg.com/736x/ee/ff/83/eeff838b3b755ae8e50c7308dd98b5d9.jpg'/>
                </Column>
                <Column flex={1}>
                <TitleHighlight># Ranking 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo percentual={65} nome="Maria Luisa Ramos" image='https://avatars.githubusercontent.com/u/98129683?v=4'/>
                    <UserInfo percentual={48} nome="Maria Luisa Ramos" image='https://avatars.githubusercontent.com/u/98129683?v=4'/>
                    <UserInfo percentual={75} nome="Maria Luisa Ramos" image='https://avatars.githubusercontent.com/u/98129683?v=4'/>
                    <UserInfo percentual={95} nome="Maria Luisa Ramos" image='https://avatars.githubusercontent.com/u/98129683?v=4'/>
                    <UserInfo percentual={85} nome="Maria Luisa Ramos" image='https://avatars.githubusercontent.com/u/98129683?v=4'/>
                </Column>
            </Container>         
        </>)
}

export default Feed;
      