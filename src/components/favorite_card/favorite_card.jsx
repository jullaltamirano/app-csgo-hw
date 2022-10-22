import s from './favorite_card.module.css'
import { removeFavorite } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export default function FavoriteCard({fav}){

    const dispatch = useDispatch()

    return(
        <div className={s.container}>
            <div className={s.title_container}>
                <h3>{fav.name}</h3>
                <button
                    onClick = {() => dispatch(removeFavorite(fav))}
                >X</button>
            </div>
            <img src={fav.img} alt=''/>
            <ul>
                <li>Price: <b>{fav.stats.price}</b></li>
                <li>Magazine: <b>{fav.stats.mag}</b></li>
                <li>Reload time: <b>{fav.stats.reload_time}</b></li>
                <li>Movement speed: <b>{fav.stats.movement_speed}</b></li>
                <li>Kill Award: <b>{fav.stats.kill_award}</b></li>
            </ul>
        </div>
    )
}