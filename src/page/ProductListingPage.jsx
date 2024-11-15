import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductListing from "../components/ProductListing";
import ProductListing2 from "../components/ProductListing2";

// const ProductListingPageContainer = styled.div`
//     div {
//         position: absolute;
//         width: 100%;
//         height: 100%;
//         left: 10px;

//     }
// `

const ProductListingPage = () => {
    return ( 
        <>
            <Header />
            <div>
                <ProductListing2 />
            </div>
            <Footer />

        </>
     );
}
 
export default ProductListingPage;