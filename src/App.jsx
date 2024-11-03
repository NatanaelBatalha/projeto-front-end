import { Children } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Home from "./components/Home"
import styled from "styled-components";



const App = () => {
    return ( 
        <>
            <div>
                <Header />
            </div> 
            <br />
            <div>
                <Home id="cabecalho"/>
            </div>
            <div>
                {/* <Footer /> */}
            </div>
             
            
              
        </>
     );
}
 
export default App;