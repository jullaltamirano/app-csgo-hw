import s from '../styles/weapon_card.module.css'
import { Link } from 'react-router-dom';

export default function WeaponCard(props){
    return(
        <Link to={`/weapons/${props.name}`} style={{backgroundImage: `url(${props.img})`}} className={s.weapon_container}>
        <div>
            <span>{props.name}</span>
        </div>
        </Link>
    )
}