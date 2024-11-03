import { Button } from "primereact/button";
import styled from "styled-components";
import star from"../assets/star-war.svg"
import ddd1 from"../assets/ddd1.svg"
import fone from"../assets/fone.svg"


const HomeConteiner = styled.div`
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
            <p>Coleções em destaque</p>
            <div className="retanguloDestaque">
                <p className="novoDrop">Novo drop Supreme</p>
                <div className="frame9">
                    <p className="t30off">30% OFF</p>
                </div>
                <div>
                    <StyledButton onClick=''>Comprar</StyledButton>
                </div>
                <div className="star">
                    <img src={star} alt="" />
                </div>
            </div>
            <div className="retanguloDestaque1">
                <p className="novoDrop">Novo drop Supreme</p>
                <div className="frame9">
                    <p className="t30off">30% OFF</p>
                </div>
                <div>
                    <StyledButton onClick=''>Comprar</StyledButton>
                </div>
                <div className="ddd1">
                    <img src={ddd1} alt="" />
                </div>
            </div>
            <div className="retanguloDestaque2">
                <p className="novoDrop">Novo drop Supreme</p>
                <div className="frame9">
                    <p className="t30off">30% OFF</p>
                </div>
                <div>
                    <StyledButton onClick=''>Comprar</StyledButton>
                </div>
                <div className="fone">
                    <img src={fone} alt="" />
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
        </HomeConteiner>
    );
}

export default Home;