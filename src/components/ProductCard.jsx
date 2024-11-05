import styled from "styled-components";
import tenis from "../assets/image/image.png"
import tenis2 from "../assets/tenis.svg"

const ProductCardConteiner = styled.div`
    .grupo53593 {
        position: absolute;
        width: 292px;
        height: 439px;
        left: 100px;
        top: 1699px;

        border-radius: solid #8F8F8F;
        background-color: #ca1b1b;
    }
    .maskGrupo {
        box-sizing: border-box;

        position: absolute;
        width: 292px;
        height: 321px;
        left: 0px;
        top: 0px;

        background: #FFFFFF;
        box-shadow: 6px 16px 30px rgba(105, 98, 98, 0.05);
        border-radius: 4px;
    }
    .nomeItem {
        position: absolute;
        width: 283px;
        height: 38px;
        left: 100px;
        top: 2062px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 38px;
        letter-spacing: 0.75px;
        color: #474747;
    }
    .nome {
        position: absolute;
        width: 35px;
        height: 24px;
        left: 100px;
        top: 2038px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 24px;
        letter-spacing: 0.75px;
        color: #8F8F8F;
    }
    .texto200 {
        position: absolute;
        width: 63px;
        height: 38px;
        left: 0px;
        top: 380px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 38px;
        letter-spacing: 0.75px;
        color: #8F8F8F;

        text-decoration: line-through;
    }
    .texto100 {
        position: absolute;
        width: 63px;
        height: 38px;
        left: 60px;
        top: 380px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 38px;
        letter-spacing: 0.75px;
        color: #1F1F1F;
    }



`

const ProductCard = () => {

    return ( 

        <ProductCardConteiner>
            <div className="grupo53593">
                <div>
                    <p className="texto200">$200</p>
                    <p className="texto100">$100</p>
                    <p>qualquer coisa</p>
                </div>
                <p className="nomeItem">K-Swiss V8 - Masculino</p>
                <p className="nome">Tênis</p>
                <p className="t30off">30% OFF</p>
                <div>
                    <div className="maskGrupo retangulo21">
                        <img src={tenis2} alt="tenis2" />
                    </div>
                </div>
            </div>
        </ProductCardConteiner>
     );
}
 
export default ProductCard;