const Navbar = () => {
  return (
    <nav className='nav'>
            <div className='nav-items'>
                <ul className={`items ${showMenu ? 'show' : ''}`}>
                    <li className="item">
                        <Link onClick={() => onNavClick('hero')}>Home</Link>
                    </li>
                    <li className="item">
                        <Link onClick={() => onNavClick('about')}>About</Link>
                    </li>
                    <li className="item">
                        <Link onClick={() => onNavClick('projects')}>Projects</Link>
                    </li>
                    <li className="item">
                        <Link onClick={()=> onNavClick('contact')}>Contact Me</Link>
                    </li>
                    <li className="item">
                        <a href={pdf} target="_blank">Resume</a>
                    </li>
                </ul>
            </div>

            <Menu right>
                <Link onClick={() => onNavClick('hero')} className="menu-item"><ImHome /> Home</Link>
                <Link onClick={() => onNavClick('about')} className="menu-item"><BsPersonCircle /> About</Link>
                <Link onClick={() => onNavClick('projects')} className="menu-item"><FaBox /> Projects</Link>
                <a href={pdf} target="_blank"><BsFileEarmarkText />Resume</a>
                <Link onClick={() => onNavClick('contact')}>Contact Me</Link>
            </Menu>
        </nav>
  )
}
export default Navbar