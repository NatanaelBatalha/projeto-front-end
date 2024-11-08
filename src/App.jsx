import HomePage from "./page/HomePage"
import Header from "./components/Header";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ProductListingPage from "./page/ProductListingPage";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/page/ProductListingPage/" element={<ProductListingPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
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