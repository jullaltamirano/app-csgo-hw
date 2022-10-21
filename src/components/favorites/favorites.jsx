import FavoriteCard from "../favorite_card/favorite_card"
import s from './favorites.module.css'

export default function Favorites(props) {

    console.log(props.favorites)

    return(
        <div className={s.container}>
            <h2>Favorites</h2>
            <div className={s.favorite_container}>
            {props.favorites.map(e => {
                return(
                    <FavoriteCard fav={e} key={e.name}/>
                )
            })}
            </div>
        </div>
    )
}