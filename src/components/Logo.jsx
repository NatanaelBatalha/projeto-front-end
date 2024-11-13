import React from "react";
import logoHeader from "../assets/logo-header.svg"
import styled from "styled-components"

const LogoContainer = styled.div`
    .logo {
        position: absolute;
        width: 253px;
        height: 44px;
        left: 104px;
        top: 42px;
    } 
`

const Logo = () => {
    return ( 
        <LogoContainer>
            <div>
                <img className="logo" src={logoHeader} alt="Descrição da Imagem" />
            </div>
        </LogoContainer>
     );
};


 
export default Logo;