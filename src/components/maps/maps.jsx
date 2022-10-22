import { useSelector } from "react-redux"
import MapCard from "../map_card/map_card"
import s from './maps.module.css'
import { useDispatch } from "react-redux"
import { getMaps } from "../../redux/actions"
import { useEffect } from "react"

export default function Maps({maps}){

    return(
        <div className={s.container}>
            <h2>Maps</h2>
            <div className={s.mapcard_container}>
                {maps && maps.map(e => (
                    <MapCard 
                        title={e.title}
                        image={e.image}
                        description={e.description}
                        key={e.id}
                    />
                    )
                )
            }
            </div>
        </div>
    )
}