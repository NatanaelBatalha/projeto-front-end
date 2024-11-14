import logoFooter from "../assets/logo-footer.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
import "primeflex/primeflex.css"
import styled from "styled-components"

const FooterContainer = styled.footer`
    .footer {
        position: absolute;
        width: 1440px;
        /* height: 454; */
        height: 550px;
        left: 0px;
        top: 3290px;

        background: #1F1F1F;
    }
    .redeSocial {
        position: absolute;
        left: 6.94%;
        right: 84.44%;
        top: 370px;
        bottom: 36.23%;
    }
    .facebook {
        position: absolute;
        width: 10.92px;
        height: 20.53px;
        left: 0px;
        top: 0px;
    }   
    .instagram {
        position: absolute;
        width: 20px;
        height: 20.53px;
        left: 25px;
        top: 0px;
    }
    .twitter {
        position: absolute;
        width: 22px;
        height: 20.53px;
        left: 60px;
        top: 0px;
    }
    .informacao1 {
        position: absolute;
        width: 307px;
        height: 78px;
        left: 100px;
        top: 151px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #FFFFFF;
    }
    .logo {
        position: absolute;
        width: 253px;
        height: 44px;
        left: 104px;
        top: 72px;
    }
    .informacao {
        position: absolute;
        width: 135px;
        height: 278px;
        left: 612px;
        top: 72px;
        color: #FFFFFF;
    }
    .titulo {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
    }
    .opcao1 {

        position: absolute;
        width: 140px;
        height: 228px;
        left: 0;
        top: 50px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
        color: #FFFFFF;
    }
    .categoria {
        position: absolute;
        width: 96px;
        height: 22px;
        left: 849px;
        top: 72px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
    }
    .opcao2 {
        position: absolute;
        width: 96px;
        height: 190px;
        left: 849px;
        top: 122px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 38px;
        color: #FFFFFF;
    }
    .campoDeContato {
        position: absolute;
        width: 233px;
        left: 1113px;
        top: 72px;
    }
    .contato {
        position: absolute;
        width: 71px;
        height: 22px;
        left: 0px;
        top: 0px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
    }
    .opcao3 {
        position: absolute;
        width: 231px;
        height: 78px;
        left: 0px;
        top: 50px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #FFFFFF;
    }
    .barra {
        position: absolute;
        width: 1240px;
        height: 1px;
        left: 100px;
        top: 450px;

        background: #FFFFFF;
        opacity: 0.3;
    }
    .infRodape {
        position: absolute;
        width: 150px;
        height: 24px;
        left: 618px;
        top: 450px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 24px;



        color: #FFFFFF;
        mix-blend-mode: normal;
    }

`

const Footer = () => {
    return (
        <FooterContainer>
            <div className="footer">
                <div>
                    <div>
                        <div>
                            <img src={logoFooter} alt="Logo Rodapé" className="logo"/>
                        </div>
                        <div className="informacao1">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime optio natus ratione iure alias eaque enim temporibus, fugiat laborum, sapiente magni neque pariatur sunt accusantium. Rerum placeat illo debitis.</p>
                        </div>
                        <div className="redeSocial">
                            <img src={facebook} alt="Facebook" className="facebook"/>
                            <img src={instagram} alt="Instagram" className="instagram"/>
                            <img src={twitter} alt="Twitter" className="twitter"/>
                        </div>
                    </div>
                    <div className="informacao">
                        <h2 className="titulo">Informação</h2>
                        <div className="opcao1">
                            <p>Sobre Drip Store</p>
                            <p>Segurança</p>
                            <p>Wishlist</p>
                            <p>Blog</p>
                            <p>Trabalhe conosco</p>
                            <p>Meus Pedidos</p>
                        </div>
                        
                    </div>
                    <div>
                        <h2 className="categoria">Categorias</h2>
                        <div className="opcao2">
                            <p>Camisetas</p>
                            <p>Calças</p>
                            <p>Bonés</p>
                            <p>Headphones</p>
                            <p>Tênis</p>
                        </div>
                        
                    </div>
                    <div className="campoDeContato">
                        <h2 className="contato">Contato</h2>
                        <div className="opcao3">
                            <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                            <p>85 3051-3411</p>
                        </div>
                    </div>
                </div>
                <hr className="barra"/>
                <div>
                    
                    <div>
                        <p className="infRodape">@ 2022 Digital College</p>
                    </div>
                </div>
            </div>
            
        </FooterContainer>
    );
}

export default Footer;