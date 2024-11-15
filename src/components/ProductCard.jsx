import styled from "styled-components";
import tenis from "../assets/image/image.png"
import tenis2 from "../assets/tenis.svg"

const ProductCardConteiner = styled.div`
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
        width: 290px;
        height: 38px;
        left: 0px;
        top: 340px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 38px;
        letter-spacing: 0.75px;
        color: #474747;
    }
    .nomeTenis {
        position: absolute;
        width: 35px;
        height: 24px;
        left: 0px;
        top: 320px;

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
    .t30off {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 5px 15px;
        gap: 10px;

        background: #E7FF86;
        border-radius: 29px;

        position: absolute;
        width: 96px;
        height: 32px;
        left: 30px;
        top: 0px;

        font-family: "Inter";
        font-style: normal;
        font-size: 13px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0.75px;
        color: #474747;

        flex: none;
        order: 0;
        flex-grow: 0;
        z-index: 1;
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
                <p className="nomeTenis">Tênis</p>
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