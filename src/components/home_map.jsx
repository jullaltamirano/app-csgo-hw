import s from '../styles/home_map.module.css';
import { Link } from 'react-router-dom'

export default function HomeMap (props){
    return (
        <Link className={s.mapscards_container} to='/maps'>       
            <div>
                <h2>{props.title}</h2>
            </div>
        </Link>         
    )
}