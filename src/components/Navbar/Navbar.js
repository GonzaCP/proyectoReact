import logoPrincipal from '../img/cultura_musical.png';
import './Navbar.css'
//import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return (     
        <header>
            <nav className="navColor">
                <Link to="/" >
                    <div className='navLogo' >
                        <img src={logoPrincipal} alt="logo principal del sitio" />                            
                    </div>
                </Link>                
                <div className='navButton'>

                    <NavLink to={`/category/musica`} className={({isActive}) => isActive ? "btn btn-light" : "btn btn-dark"}>MÚSICA</NavLink>
                    <NavLink to={`/category/cine`} className={({isActive}) => isActive ? "btn btn-light" : "btn btn-dark"}>CINE</NavLink>

                  {/*   
                    <Link to="/category/musica">RedHot</Link>
                    <Link to="/category/musica">Greta Van Fleet</Link>
                    <Link to="/category/peliculas">Pink Floyd</Link>
 */}

                   {/*  <Button label="Recitales" backgroundColor="blue" bootstrap=" btn btn-primary btn-lg m-3" />
                    <Button label="Teatro" backgroundColor="blue" bootstrap=" btn btn-primary btn-lg m-3 " />
                    <Button label="Cine" backgroundColor="blue" bootstrap=" btn btn-primary btn-lg m-3 " /> */}
                </div>
                <div className='navCart'>
                <CartWidget />  
                </div>
                <div>
                    
                </div>
            </nav> 
        </header>
    )
}

export default Navbar