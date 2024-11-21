import HomePage from "./page/HomePage"
import Header from "./components/Header";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ProductListingPage from "./page/ProductListingPage";
import ProductCard from "../src/components/ProductCard"
import ProductListing from "../src/components/ProductListing"
import Gallery from "../src/components/Gallery"
import Logo from "./components/Logo";
import styled from "styled-components";
import Footer from "./components/Footer";
import Layout from "./components/layout";
import Gallery2 from "./components/Gallery2";
import ProductOptions from "./components/ProductOptions";



function App() {
    return (

        <>
            <ProductOptions />
            {/* <ProductListingPage /> */}
            {/* <HomePage /> */}
            {/* <Gallery2 /> */}

            {/* <Layout /> */}
            {/* <Header /> */}
            {/* <ProductOptions />
            <Gallery />
            <ProductCard />
            <ProductListing />
            <Logo /> */}
            
            
            
            {/* <Footer /> */}

            {/* <BrowserRouter>
                <Header />
                <Gallery />
                <Routes>
                    <Route path="/page/ProductListingPage/" element={<ProductListingPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/componets/ProductCard/" element={<ProductCard />} />
                </Routes>
                <Footer/>
            </BrowserRouter> */}
        </>
        
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