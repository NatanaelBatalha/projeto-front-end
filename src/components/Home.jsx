import { Button } from "primereact/button";
import styled, { createGlobalStyle } from "styled-components";


const PageContainer = styled.div`
    .retanguloDestaue {
        position: absolute;
        width: 50%;
        height: 40%;
        border: solid red;
    }
`

const Home = () => {
    return (
        <PageContainer>
            <p>Coleções em destaque</p>
            <div className="retanguloDestaque">
                <p className="novoDrop">Novo drop Supreme</p>
                <div className="frame9">
                    <p className="Texto30off">30% OFF</p>
                </div>
                <div>
                    <p>botão</p>
                </div>
            </div>
            <div></div>
            <div></div>
            <p>Coleções em destaque</p>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </PageContainer>
    );
}

export default Home;