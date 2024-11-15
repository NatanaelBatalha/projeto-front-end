import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Gallery2 from "../components/Gallery2";
import Header from "../components/Header";
import Layout from "../components/layout";
import ProductListing from "../components/ProductListing";

const HomePage = () => {
    return ( 
        <>
            <Header />
            <Gallery />
            <Layout />
            <ProductListing />
            <Gallery2 />
            <Footer />
        </>
     );
}
 
export default HomePage;