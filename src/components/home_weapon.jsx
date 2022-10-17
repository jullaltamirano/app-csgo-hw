import s from '../styles/home_weapon.module.css'
import { Link } from 'react-router-dom';

export default function HomeWeapon (props){
    return (
        <Link to='/weapons' className={s.weaponcards_container}>
            <div>
                <h2>{props.title}</h2>
            </div>
        </Link>
    )
}