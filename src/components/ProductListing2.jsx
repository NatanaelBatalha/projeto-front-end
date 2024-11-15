import styled from "styled-components";
import ProductCard from "./ProductCard";
import ProductOptions from "./ProductOptions"

const ProductListing2Container = styled.div`
    .bloco2 {
        position: absolute;
        width: 600px;
        height: 918px;
        left: 436px;
        top: 332px;
    }
    .pro1 {
        position: absolute;
        left: 100%;
        top: 5px;
    }
    .pro2 {
        position: absolute;
        left: 50%;
        top: 5px;
    }
    .pro3 {
        position: absolute;
        left: 0%;
        top: 5px;
    }
    .pro4 {
        position: absolute;
        left: 0%;
        top: 500px;
    }
    .pro5 {
        position: absolute;
        left: 50%;
        top: 500px;
    }
    .pro6 {
        position: absolute;
        left: 100%;
        top: 500px;
    }
    .pro7 {
        position: absolute;
        left: 0%;
        top: 1000px;
    }
    .pro8 {
        position: absolute;
        left: 50%;
        top: 1000px;
    }
    .pro9 {
        position: absolute;
        left: 100%;
        top: 1000px;
    }

`

const ProductListing2 = () => {
    return (
        <ProductListing2Container>
            <>
                <ProductOptions />
            </>
            <div className="bloco2">
                <div className="pro1"><ProductCard /></div>
                <div className="pro2"><ProductCard /></div>
                <div className="pro3"><ProductCard /></div>
                <div className="pro4"><ProductCard /></div>
                <div className="pro5"><ProductCard /></div>
                <div className="pro6"><ProductCard /></div>
                <div className="pro7"><ProductCard /></div>
                <div className="pro8"><ProductCard /></div>
                <div className="pro9"><ProductCard /></div>
            </div>
        </ProductListing2Container>
     );
}
 
export default ProductListing2;