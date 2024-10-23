import logoFooter from "../assets/logo-footer.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
import "primeflex/primeflex.css"


const Footer = () => {
    return (
        <>
            <div id="rodape">
                <div className="flex text-justify" >
                    <div className="flex-1  p-4 m-3 mr-7">
                        <div className="flex m-3">
                            <img
                                src={logoFooter}
                                alt="Logo Rodapé"
                            />
                        </div>
                        <div className="flex m-3 text-left">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime optio natus ratione iure alias eaque enim temporibus, fugiat laborum, sapiente magni neque pariatur sunt accusantium. Rerum placeat illo debitis.</p>
                        </div>
                        <div className="flex m-3" id="redes">
                            <img src={facebook} alt="Facebook" className="mr-5" />
                            <img src={instagram} alt="Instagram" className="mr-5" />
                            <img src={twitter} alt="Twitter" className="mr-5"/>
                        </div>
                    </div>
                    <div className="flex-1 text-left p-4 m-3 mr-7" id="informacao">
                        <h2>Informação</h2>
                        <p>Sobre Drip Store</p>
                        <p>Segurança</p>
                        <p>Wishlist</p>
                        <p>Blog</p>
                        <p>Trabalhe conosco</p>
                        <p>Meus Pedidos</p>
                    </div>
                    <div className="flex-1 text-left p-4 m-3" id="categoria">
                        <h2>Categorias</h2>
                        <p>Camisetas</p>
                        <p>Calças</p>
                        <p>Bonés</p>
                        <p>Headphones</p>
                        <p>Tênis</p>
                    </div>
                    <div className="flex-1 text-left p-4 m-3" id="contato">
                        <h2>Contato</h2>
                        <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                        <p>85 3051-3411</p>
                    </div>
                </div>
                
                <div id="digital">
                    <hr />
                    <div>
                        <p>@ 2022 Digital College</p>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Footer;