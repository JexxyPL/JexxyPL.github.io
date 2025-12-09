import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header>
            <section className="left">
                <a href="https://github.com/JexxyPL" target='_blank' rel="noopener noreferrer"><img className='portl' src="https://avatars.githubusercontent.com/u/164803938" alt="" srcset="" /></a>
                <h1>JexxyPL</h1>
            </section>
            <section className="right">
                    <nav translate='no' lang="zxx">
                    <Link className='nag' to="/">About Me</Link>
                    <Link className='nag' to="/projects">My Projects</Link>
                    <Link className='nag' to="/skills">Skills</Link>
                </nav>
            </section>
        </header>
    )
}

export default Header
