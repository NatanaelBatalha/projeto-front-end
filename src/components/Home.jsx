import { Button } from "primereact/button";
import styled from "styled-components";
import star from"../assets/star-war.svg"
import ddd1 from"../assets/ddd1.svg"
import fone from"../assets/fone.svg"
import frame14tenis from "../assets/frame14tenis.svg"
import frame13fone from "../assets/frame13fone.svg"
import frame12calca from "../assets/frame12calca.svg"
import frame10camisa from "../assets/frame10camisa.svg"
import camisa from "../assets/camisaTeste.svg"

const HomeConteiner = styled.div`
    .retangulotela {
        height: 200vh;
        margin: 0;
        background-color: #45a2ff;
    }
    .retanguloDestaque {
        position: absolute;
        width: 405px;
        height: 251px;
        left: 100px;
        top: 971px;
        background: #D8E3F2;
        border-radius: 8px;
    }
    .retanguloDestaque1 {
        position: absolute;
        width: 405px;
        height: 251px;
        left: 520px;
        top: 971px;
        background: #D8E3F2;
        border-radius: 8px;
    }
    .retanguloDestaque2 {
        position: absolute;
        width: 405px;
        height: 251px;
        left: 940px;
        top: 971px;
        background: #D8E3F2;
        border-radius: 8px;
    }
    .star {
        position: absolute;
        width: 242px;
        height: 251px;
        left: 162px;
        top: 7px;
    }
    .ddd1 {
        position: absolute;
        width: 242px;
        height: 251px;
        left: 162px;
        top: 0px;
    }
    .fone {
        position: absolute;
        width: 242px;
        height: 251px;
        left: 179px;
        top: 0px;
    }
    .novoDrop {
        position: absolute;
        width: 172px;
        height: 72px;
        left: 25px;
        top: 35px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 36px;
        letter-spacing: 1px;
        color: #1F1F1F;
    }
    .t30off {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 5px 15px;
        gap: 10px;

        position: absolute;
        width: 99px;
        height: 32px;
        left: 25px;
        top: 20px;
        background: #E7FF86;
        border-radius: 29px;

        font-family: "Inter";
        font-style: normal;
        font-size: 14px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0.75px;
        color: #474747;

        flex: none;
        order: 0;
        flex-grow: 0;
    }
    .textoColecao1 {
        position: absolute;
        width: 285px;
        height: 38px;
        left: 579px;
        top: 1322px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 38px;
        letter-spacing: 0.75px;

        color: #474747;
    }
    .textoColecao2 {
        position: absolute;
        width: 285px;
        height: 38px;
        left: 100px;
        top: 890px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 38px;
        letter-spacing: 0.75px;

        color: #474747;
    }
    .blusaCalçaFoneTenis {
        position: absolute;
        width: 712px;
        height: 138px;
        left: 364px;
        top: 1410px;
    }
    .imagemCamisa {
        position: absolute;
        left: 0;
    }
    .imagemBones {
        position: absolute;
        left: 150px;
    }
    .imagemCalca {
        position: absolute;
        left: 300px;
    }
    .imagemFone {
        position: absolute;
        left: 450px;
    }
    .imagemTenis{
        position: absolute;
        left: 600px;
    }
    .camisetas, .calca, .bones, .headphones, .tenis {
        display: flex;
        justify-content: center;
        align-items: center;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
        text-align: center;
        letter-spacing: 0.75px;
        color: #474747;

        &:hover {
            color: white;
        }
    }
    .produtoAlta {
        position: absolute;
        width: 210px;
        height: 38px;
        left: 100px;
        top: 1641px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 38px;
        letter-spacing: 0.75px;

        color: #474747;
    }
    .verTodos {
        position: absolute;
        width: 90px;
        height: 34px;
        left: 1218px;
        top: 1647px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 34px;
        letter-spacing: 0.75px;

        color: #C92071;
    }

`;
const StyledButton = styled.button`
    position: absolute;
    height: 48px;
    left: 6%;
    right: 50%;
    top: 150px;
    z-index: 1;

    background: #F5F5F5;
    border-radius: 8px;
    border: none;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.75px;
    color: #C92071;

    &:hover {
        background: #C92071;
        color: #F5F5F5;
        cursor: pointer;
    }
`;

const Home = () => {
    return (
        <HomeConteiner>
            <div className="retangulotela">
                <div className="textoColecao1">
                    <p>Coleções em destaque</p>
                </div>
                <div className="retanguloDestaque">
                    <p className="novoDrop">Novo drop Supreme</p>
                    <div className="frame9">
                        <p className="t30off">30% OFF</p>
                    </div>
                    <div>
                        <StyledButton>Comprar</StyledButton>
                    </div>
                    <div className="star">
                        <img src={star} alt="Camisa" />
                    </div>
                </div>
                <div className="retanguloDestaque1">
                    <p className="novoDrop">Novo drop Supreme</p>
                    <div className="frame9">
                        <p className="t30off">30% OFF</p>
                    </div>
                    <div>
                        <StyledButton>Comprar</StyledButton>
                    </div>
                    <div className="ddd1">
                        <img src={ddd1} alt="Sapato" />
                    </div>
                </div>
                <div className="retanguloDestaque2">
                    <p className="novoDrop">Novo drop Supreme</p>
                    <div className="frame9">
                        <p className="t30off">30% OFF</p>
                    </div>
                    <div>
                        <StyledButton>Comprar</StyledButton>
                    </div>
                    <div className="fone">
                        <img src={fone} alt="Fone" />
                    </div>
                </div>
                <p className="textoColecao2">Coleções em destaque</p>
                <div className="blusaCalçaFoneTenis">
                    <div className="imagemCamisa">
                        <img className="frame10camisa" src={camisa} alt="frame10camisa" />
                        <p className="camisetas">Camisetas</p>
                    </div>
                    <div className="imagemBones">
                        <img className="frame11bones" src={frame12calca} alt="frame11bones" />
                        <p className="calca">Calças</p>
                    </div>
                    <div className="imagemCalca">
                        <img className="frame12calca" src={frame12calca} alt="frame12calca" />
                        <p className="bones">Bonés</p>
                    </div>
                    <div className="imagemFone">
                        <img className="frame13fone" src={frame13fone} alt="frame13fone" />
                        <p className="headphones">Headphones</p>
                    </div>
                    <div className="imagemTenis">
                        <img className="frame14tenis" src={frame14tenis} alt="frame14tenis" />
                        <p className="tenis">Ténis</p>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <p></p>
                            <p className="verTodos">Ver todos</p>
                        </div>
                    </div>
                    <p className="produtoAlta">Produto em alta</p>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            
        </HomeConteiner>
    );
}

export default Home;