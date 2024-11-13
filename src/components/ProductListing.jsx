import ProductCard from "../components/ProductCard"
import styled from "styled-components";

const ProductListingContainer = styled.div`
    .pro1 {
        position: absolute;
        left: 48.5%;
        top: 5px;
    }
    .pro2 {
        position: absolute;
        left: 32.5%;
        top: 5px;
    }
    .pro3 {
        position: absolute;
        left: 16.5%;
        top: 5px;
    }
    .pro4 {
        position: absolute;
        left: 0,5%;
        top: 5px;
    }
    .pro5 {
        position: absolute;
        left: 48.5%;
        top: 500px;
    }
    .pro6 {
        position: absolute;
        left: 32.5%;
        top: 500px;
    }
    .pro7 {
        position: absolute;
        left: 16.5%;
        top: 500px;
    }
    .pro8 {
        position: absolute;
        left: 0,5%;
        top: 500px;
    }

`

const ProductListing = () => {
    return ( 
        <ProductListingContainer>
            <div>
                <div className="pro1"><ProductCard /></div>
                <div className="pro2"><ProductCard /></div>
                <div className="pro3"><ProductCard /></div>
                <div className="pro4"><ProductCard /></div>
                <div className="pro5"><ProductCard /></div>
                <div className="pro6"><ProductCard /></div>
                <div className="pro7"><ProductCard /></div>
                <div className="pro8"><ProductCard /></div>
            </div>
        </ProductListingContainer>
     );
}
 
export default ProductListing;