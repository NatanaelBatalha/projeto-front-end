import logoHeader from "../assets/logo-header.svg";
import miniCart from "../assets/mini-cart.svg";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
// import "primereact/resources/themes/lara-light-pink/theme.css"
import styled from "styled-components"
import { useState } from "react";
import { Link } from "react-router-dom"
import sapato from "../assets/sapato.svg"
import ornament from "../assets/ornament.svg"

const HeaderContainer = styled.header`
    #53578 {
        position: absolute;
        width: 1440px;
        height: 875px;
        left: 0px;
        top: 0px;
    }
    #53577 {
        position: absolute;
        width: 1440px;
        height: 192px;
        left: 0px;
        top: 0px;

    }
    .retangulo4 {
        position: absolute;
        width: 1440px;
        height: 192px;
        left: 0px;
        top: 0px;

        background: #FFFFFF;
        box-shadow: 0px 10px 30px rgba(141, 114, 32, 0.05);
    }
    #53576 {
        position: absolute;
        width: 993px;
        height: 129px;
        left: 100px;
        top: 34px;
    }
    #53575 {
        position: absolute;
        width: 423px;
        height: 29px;
        left: 100px;
        top: 134px;
    }
    #53530 {
        position: absolute;
        width: 423px;
        height: 29px;
        left: 100px;
        top: 134px;
    }
    #produtos {
        position: absolute;
        width: 74px;
        height: 28px;
        left: 181px;
        top: 134px;

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
    #pedidos {
        position: absolute;
        width: 115px;
        height: 28px;
        left: 408px;
        top: 134px;

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
    #categorias {
        position: absolute;
        width: 89px;
        height: 28px;
        left: 287px;
        top: 134px;

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

    #53529 {
        position: absolute;
        width: 49px;
        height: 27px;
        left: 100px;
        top: 136px;
    }
    #home {
        position: absolute;
        width: 49px;
        height: 24px;
        left: 100px;
        top: 136px;

        /* Text Small Bold */
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */
        text-align: center;
        letter-spacing: 0.75px;

        /* primary */
        color: #C92071;
    }
    #53574 {
        position: absolute;
        width: 709px;
        height: 60px;
        left: 384px;
        top: 34px;
    }
    #53546 {
        position: absolute;
        width: 559px;
        height: 60px;
        left: 384px;
        top: 34px;
    }
    .retangulo1 {
        position: absolute;
        width: 559px;
        height: 60px;
        left: 384px;
        top: 34px;

        /* dark-gray-2 */
        background: #474747;
        opacity: 0.04;
        border-radius: 8px;
    }
    div ::placeholder {
        position: absolute;
        width: 166px;
        height: 28px;
        left: 408px;
        top: 50px;

        /* Text Small - Desktop */
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        /* identical to box height, or 175% */
        letter-spacing: 0.75px;

        /* dark-gray-3 */
        color: #666666;

        opacity: 0.6;
    }
    #53579 {
        position: absolute;
        width: 102px;
        height: 28px;
        left: 991px;
        top: 50px;
    }
    .cadastro {
        position: absolute;
        width: 102px;
        height: 28px;
        left: 991px;
        top: 38px;

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
        position: absolute;
        left: 77.99%;
        right: 14.1%;
        top: 1.18%;
        bottom: 97.76%;
    }
    #logo {
        /* logo */

        position: absolute;
        width: 253px;
        height: 44px;
        left: 104px;
        top: 42px;
    }
    #button {
        position: absolute;
        left: 0%;
        right: 20%;
        top: 45px;
        background-color: #C92071;

        /* Text X-Small Bold */
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 15px;
        width: 110px;
        /* or 157% */
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.75px;

        /* light-gray-3 */
        color: #F5F5F5;
    }
    #carrinho {
        /* position: absolute;
        left: 90%;
        top: 75px;
        bottom: 2px; */
        position: absolute;
        width: 33px;
        height: 29px;
        left: 1307px;
        top: 60px;
    }
    #53578 {
        position: absolute;
        width: 1440px;
        height: 875px;
        left: 0px;
        top: 0px;
    }
    #sapato {
        position: absolute;
        width: 733.51px;
        height: 431.61px;
        left: 513.25px;
        top: 446.91px;

        background: url(sapato.svg);
        filter: drop-shadow(0px 4px 25px rgba(119, 15, 21, 0.08));
        transform: rotate(-19.34deg);
    }

`

const Header2 = () => {

    const [value, setValue] = useState()

    return (

        <HeaderContainer>
            <div id="53578">
                <div id="sapato">
                    <img src={sapato} alt="sapato" />   
                </div>
                <div id="53572">
                    <div id="53570">
                        <p>Melhores ofertas personalizadas</p>
                        <Button id="ofertas" label="Ver Ofertas"/>
                        <h1>Queima de stoque Nike </h1>
                        <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                        Ver Ofertas</p>
                    </div>
                </div>
                <div id="53577" className="retangulo4">
                    <div id="botao">
                        <Button id="button" label="Entre"/></div>
                    <div id="carrinho">
                        <img src={miniCart} alt="Carrinho" />
                    </div>
                    <div id="logo">
                        <img src={logoHeader} alt="Logo" />
                    </div>
                    <div id="53576">
                        <div id="53574">
                            <p id="53579" className="cadastro">Cadastre-se</p>
                            <div id="53546" className="retangulo1">
                                <InputText value={value} onChange={(e) => setValue(e.target.value)} placeholder="Pesquisar produto..."/>
                            </div>
                        </div>
                        <div id="53575">
                            <div id="53530">
                                <nav>
                                    <ul id="lista">
                                        <li id="home"><a href="https://www.google.com.br/">Home</a></li>
                                        <li id="produtos"><a href="https://www.google.com.br/">Produto</a></li>
                                        <li id="categorias"><a href="https://www.google.com.br/">Categorias</a></li>
                                        <li id="pedidos"><a href="https://www.google.com.br/">Meus Pedidos</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </HeaderContainer>

    );
}

export default Header2;