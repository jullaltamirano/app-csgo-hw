import logo from '../../img/logo.png';
import s from './nav.module.css';
import { Link } from 'react-router-dom';

export default function Nav (){
    return (
        <nav className={s.nav_container}>
            <div className={s.logo_container}>    
                    <img src={logo} alt="csgo-app" />
                <Link to='/' className={s.link}> 
                    <h1>Counter-Strike Global Offensive App</h1>
                </Link> 
            </div>
            <ul>
                <Link to='/' className={s.link}>
                <li>Home</li>
                </Link>
                <Link to='/about' className={s.link}>
                <li>About</li>
                </Link>
                <Link to='/favorites' className={s.link}>
                <li>Favorites</li>
                </Link>
            </ul>
        </nav>
    )
}