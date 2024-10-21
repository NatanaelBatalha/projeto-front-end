import Buybox from "./Buybox";
import logoHeader from "../assets/logo-header.svg"
import miniCart from "../assets/mini-cart.svg"

const Header = () => {
    return ( 
        <>
            <div>
                <img src={logoHeader} alt="Logo" />
            </div>
            <div>
                <p>Cadastre-se</p>
            </div>
            <div>
                <h5>Entrar</h5>
            </div>
            <div>
                <img src={miniCart} alt="Carrinho" />
            </div>
            <div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Produto</li>
                        <li>Categorias</li>
                        <li>Meus Pedidos</li>
                    </ul>
                </nav>
            </div>

            
            
        </>
     );
}
 
export default Header;