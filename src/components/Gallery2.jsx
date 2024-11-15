import styled from "styled-components";
import ellipse11 from "../assets/ellipse11.svg"
import laye1 from "../assets/laye1.svg"
import { Button } from "primereact/button";


const Gallery2Container = styled.div`
    .galleryInferior {
        position: absolute;
        width: 100%;
        height: 100%;
        top: -30px;
    }
    .imagemTenis {
        position: absolute;
        width: 573px;
        height: 330px;
        left: 52px;
        top: 2852px;
    }
    .ellipse11 {
        position: absolute;
        width: 466px;
        height: 466px;
        left: 129px;
        top: 2824px;
    }
    .blocoTexto {
        position: absolute;
        width: 589px;
        height: 341px;
        left: 692px;
        top: 2843px;
    }
    .texto {
        position: absolute;
        width: 589px;
        height: 112px;
        left: 20px;
        top: 150px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        letter-spacing: 0.75px;

        color: #474747;
   }
   .titulo {
        position: absolute;
        width: 514px;
        height: 100px;
        left: 20px;
        top: 0px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 50px;
        letter-spacing: 1px;

        color: #474747;
   }
   .oferta {
        position: absolute;
        width: 118px;
        height: 22px;
        left: 20px;
        top: 0px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0.75px;

        color: #C92071;
   }
   .botao {
        position: absolute;
        height: 40px;
        left: 20px;
        right: 38.06%;
        top: 300px;

        
   }
   .button {
        position: absolute;
        left: 0%;
        right: 0%;
        top: 0%;
        bottom: 0%;
        border-radius: 8px;
        
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;

        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.75px;

        color: #F5F5F5;
   }
`


const Gallery2 = () => {


    return ( 
        <Gallery2Container>
            <div className="galleryInferior">
                <div className="imagemTenis">
                    <img src={laye1} alt="Tenis" />
                </div>
                <div className="posicao">
                    <img src={ellipse11} alt="circulo" className="ellipse11"/>
                    <div className="blocoTexto">
                        <div className="botao">
                            <Button className="button" label="Ver Ofertas"/>
                        </div>
                        <p className="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                        <p className="titulo">Air Jordan edição de 
                        colecionador</p>
                        <p className="oferta">Oferta especial</p>
                    </div>
                </div>
            </div>
            
        </Gallery2Container>
     );
}
 
export default Gallery2;