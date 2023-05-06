import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { bubble as Menu } from 'react-burger-menu';
import './Navbar.css'





const Navbar = () => {


    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

  return (
    <nav className='nav'>
            <div className='nav-items'>
                <li className='logo'>
                    CRYSTAL*<span className='spanLogo'>GEMS</span>
                </li>
                <ul className={`items ${showMenu ? 'show' : ''}`}>
                    <li className="item">
                        <Link>CATALOGUE</Link>
                    </li>
                    <li className="item">
                        <Link>LEARN</Link>
                    </li>
                    <li className="item">
                        <Link>CONTACT</Link>
                    </li>
                    <li className="item">
                        <Link>ABOUT</Link>
                    </li>
                </ul>
            </div>

            <Menu right>
                <Link className="menu-item">CATALOGUE</Link>
                <Link className="menu-item">LEARN</Link>
                <Link className="menu-item"> CONTACT</Link>
                <Link>ABOUT</Link>
            </Menu>
        </nav>
  )
}
export default Navbar