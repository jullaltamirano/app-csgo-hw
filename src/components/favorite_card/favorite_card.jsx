import s from './favorite_card.module.css'

export default function FavoriteCard({fav}){
    return(
        <div className={s.container}>
            <h3>{fav.name}</h3>
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