import { useSelector } from "react-redux"
import FavoriteCard from "../favorite_card/favorite_card"
import s from './favorites.module.css'
import { useEffect } from "react"

export default function Favorites(props) {

    let favorites = useSelector(state => state.favorites)

    useEffect(() => {
        favorites = [... new Set(favorites)]
    },[])

    return(
        <div className={s.container}>
            <h2>Favorites</h2>
            <div className={s.favorite_container}>
            {favorites.map(e => {
                return(
                    <FavoriteCard fav={e} key={e.name}/>
                )
            })}
            </div>
        </div>
    )
}