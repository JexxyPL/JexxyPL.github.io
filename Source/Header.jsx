import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header>
            <nav translate='no' lang="zxx">
                <Link className='nag' to="/">About Me</Link>
                <Link className='nag' to="/projects">My Projects</Link>
                <Link className='nag' to="/skills">Skills</Link>
            </nav>
        </header>
    )
}

export default Header
