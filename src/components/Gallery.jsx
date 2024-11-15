import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-pink/theme.css"
import styled from "styled-components"
import sapato from "../assets/sapato.svg"
import ornament from "../assets/ornament.svg"
import "typeface-inter"
import ellipse16 from "../assets/ellipse16.svg"

const GalletyContainer = styled.header`
    #53578 {
        position: absolute;
        width: 1440px;
        height: 875px;
        left: 0px;
        top: 0px;
    }
    #sapato {
        position: absolute;
        width: 733.51px;
        height: 431.61px;
        left: 513.25px;
        top: 0px;
        filter: drop-shadow(0px 4px 25px rgba(119, 15, 21, 0.08));
        transform: rotate(-5.34deg);
    }
    .retangulo7 {
        position: absolute;
        width: 1440px;
        height: 700px;
        left: 0px;
        top: 194px;
        background: #F5F5F5;
    }
    #ornamento {
        position: absolute;
        width: 140px;
        height: 140px;
        left: 1263px;
        top: 70px;

        color: #F6AA1C;
        /* opacity: 0.4; */
    }
    .nike {
        position: absolute;
        width: 510px;
        left: 100px;
        top: 100px;
    }
    .queima{
        font-family: "Inter";
        font-style: normal;
        font-weight: 800;
        font-size: 64px;
        color: #1F1F1F;
        margin: 5px 0;
        line-height: 66px
    }
    .bottom {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #474747;
        line-height: 34px
    }
    .top {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.75px;
        color: #F6AA1C;
    }
    .bolinhas {
        position: absolute;
        left: 50%;
        top: 90%;
    }
    .ofertas {
        width: 50%;
    }
    .botaoOfertas {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        /* or 150% */
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.75px;

        /* light-gray-3 */
        color: #F5F5F5;

    }
    .ellipse1 {
        padding: 0 5px;
    }
    .ellipse2 {
        padding: 0 5px;
    }
    .ellipse3 {
        padding: 0 5px;
    }
    .ellipse4 {
        padding: 0 5px;
    }
`

const Gallery = () => {
    return (
        <GalletyContainer>
            <div id="53578">

                <div className="retangulo7" id="53572">
                    <div id="sapato">
                        <img src={sapato} alt="sapato" />
                    </div>
                    <img id="ornamento" src={ornament} alt="ornamento" />
                    <div id="53570" className="nike">
                        <p className="top">Melhores ofertas personalizadas</p>
                        <h1 className="queima">Queima de stoque Nike 🔥 </h1>
                        <p className="bottom">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                            Ver Ofertas</p>
                        <div className="botaoOfertas">
                            <Button className="ofertas" label="Ver Ofertas" />
                        </div>
                    </div>
                    <div className="bolinhas">
                        <img src={ellipse16} alt="ellipse" className="ellipse1" />
                        <img src={ellipse16} alt="ellipse" className="ellipse2" />
                        <img src={ellipse16} alt="ellipse" className="ellipse3" />
                        <img src={ellipse16} alt="ellipse" className="ellipse4" />
                    </div>
                </div>
            </div>

        </GalletyContainer>

    );
}

export default Gallery;