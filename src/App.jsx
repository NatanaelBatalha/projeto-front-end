import HomePage from "./page/HomePage"
import Header from "./components/Header";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ProductListingPage from "./page/ProductListingPage";
import ProductCard from "../src/components/ProductCard"
import ProductListing from "../src/components/ProductListing"
import Gallery from "../src/components/Gallery"
import Logo from "./components/Logo";
import ProductOptions from "../src/components/ProductOptions"
import styled from "styled-components";

const AppContainer = styled.div`
    /* position: absolute;
    left: 0%;
    background-color: #F5F5F5;
    background-color: #d31b39; */

    position: absolute;
    background-color: red;
    margin: 0px;
    height: 100vh;
    width: 100%;
    
    
`


function App() {
    return (

        <AppContainer>
            {/* <Header /> */}
            {/* <ProductOptions />
            <Gallery />
            <ProductCard />
            <ProductListing />
            <Logo /> */}

            <BrowserRouter>
                <Header />
                <Gallery />
                <Routes>
                    <Route path="/page/ProductListingPage/" element={<ProductListingPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/componets/ProductCard/" element={<ProductCard />} />
                </Routes>
            </BrowserRouter>
        </AppContainer>
        
    );
}; 

export default App;

// const App = () => {
//     return ( 
//         <>
//             <Header/>
//         </>
//      );
// }
 
// export default App;