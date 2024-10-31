import logoHeader from "../assets/logo-header.svg";
import miniCart from "../assets/mini-cart.svg";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-pink/theme.css"
import styled from "styled-components"
import { useState } from "react";
import sapato from "../assets/sapato.svg"


const HeaderContainer = styled.header`


    width: 1440px;
    height: 192px;
    left: 0px;
    top: 0px;

    background: #FFFFFF;
    box-shadow: 0px 10px 30px rgba(141, 114, 32, 0.05);

    #logo {
        position: absolute;
        width: 253px;
        height: 44px;
        left: 104px;
        top: 42px;
    }
    
    #pesquisa {
   
        position: absolute;
        width: 559px;
        height: 60px;
        left: 384px;
        top: 34px;

        background: #474747;
        opacity: 0.04;
        border-radius: 8px;
    }
    #cadastro {
        /* Cadastre-se */

        position: absolute;
        width: 102px;
        height: 28px;
        left: 991px;
        top: 50px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        /* identical to box height, or 175% */
        letter-spacing: 0.75px;
        text-decoration-line: underline;

        /* dark-gray-2 */
        color: #474747;
    }
    #botao {
        /* primary-button */

        position: absolute;
        left: 77.99%;
        right: 14.1%;
        top: 1.18%;
        bottom: 97.76%;
    }
    #carrinho {
        position: absolute;
        width: 33px;
        height: 29px;
        left: 1307px;
        top: 47px;
    }
    #lista {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: inline;
        border: none;
        
    }
    #home, #produto, #categorias, #pedidos {    
        /* Text Small - Desktop */
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        /* identical to box height, or 175% */
        letter-spacing: 0.75px;

        /* dark-gray-2 */
        color: #474747;
    }
    #home {
        position: absolute;
        width: 49px;
        height: 27px;
        left: 100px;
        top: 136px;
    }
    #produto {
        position: absolute;
        width: 74px;
        height: 28px;
        left: 181px;
        top: 134px;
    }
    #categorias {
        position: absolute;
        width: 89px;
        height: 28px;
        left: 287px;
        top: 134px;
    }
    #pedidos {
        position: absolute;
        width: 115px;
        height: 28px;
        left: 408px;
        top: 134px;
    }
    
`;


const Header = () => {

    const [value, setValue] = useState()

    return ( 
        <HeaderContainer>
            <div>
                <img id="logo" src={logoHeader} alt="Logo" />
                <div id="caixa">
                    <div id="pes">
                        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
                    </div>
                    <div id="cadastro">
                        <p>Cadastre-se</p>
                    </div>
                    <div>
                        <nav>
                            <ul id="lista">
                                <li id="home"><a href="https://www.google.com.br/">Home</a></li>
                                <li id="produto"><a href="https://www.google.com.br/">Produto</a></li>
                                <li id="categorias"><a href="https://www.google.com.br/">Categorias</a></li>
                                <li id="pedidos"><a href="https://www.google.com.br/">Meus Pedidos</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                
                
                <Button id="botão" label="Entre"/>
                <img id="carrinho" src={miniCart} alt="Carrinho" />

                <div><img src="sapato" alt={sapato} /></div>
                
            </div>
        </HeaderContainer>
     );
}

export default Header;