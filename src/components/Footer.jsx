import logoFooter from "../assets/logo-footer.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"

const Footer = () => {
    return ( 
        <>
            <div id="rodape">
                <img src={logoFooter} alt="Logo Rodapé" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime optio natus ratione iure alias eaque enim temporibus, fugiat laborum, sapiente magni neque pariatur sunt accusantium. Rerum placeat illo debitis.</p>
                <div id="redes">
                    <img src={facebook} alt="Facebook" />
                    <img src={instagram} alt="Instagram" />
                    <img src={twitter} alt="Twitter" />
                </div>
                <div id="informacao">
                    <h3>Imformação</h3>
                    <p>Sobre Drip Store</p>
                    <p>Segurança</p>
                    <p>Wishlist</p>
                    <p>Blog</p>
                    <p>Trabalhe conosco</p>
                    <p>Meus Pedidos</p>
                </div>
                <div id="categoria">
                    <h3>Categorias</h3>
                    <p>Camisetas</p>
                    <p>Calças</p>
                    <p>Bonés</p>
                    <p>Headphones</p>
                    <p>Tênis</p>
                </div>
                <div id="contato">
                    <h3>Contato</h3>
                    <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                    <p>85 3051-3411</p>
                </div>
                <hr />
                <div id="digital">
                    <p>@ 2022 Digital College</p>
                </div>
            </div>
        </>
     );
}
 
export default Footer;