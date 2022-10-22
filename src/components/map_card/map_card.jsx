import s from './map_card.module.css'

export default function MapCard(props){
    return (
        <div className={s.container}>
            <div className={s.image_container} style={{backgroundImage: `url(${props.image})`}}>
            </div>                         
            <div className={s.text_container}>
                <h3>{props.title}</h3>
                <span>{props.description}</span>
            </div>
        </div>
    )
}