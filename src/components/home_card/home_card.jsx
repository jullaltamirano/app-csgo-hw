import s from './home_card.module.css'
import { Link } from 'react-router-dom';

export default function HomeCard (props){
    return (
        <div className = {s.home_container}>
            <Link to='/weapons' className={s.weaponcards_container}>
                <div>
                    <h2>{props.title}</h2>
                </div>
            </Link>
            <Link className={s.mapscards_container} to='/maps'>       
                <div>
                    <h2>{props.title2}</h2>
                </div>
            </Link>  
        </div>
    )
}