import WeaponCard from "../weapon_card/weapon_card"
import s from './weapons.module.css'

export default function Weapons(props){
    return (
        <div className={s.container}>
            <h2>Weapons</h2>        
            <div className={s.weapon_container}>            
                {
                    props.weapons.map(e => (
                        <WeaponCard 
                            key={e.name}
                            name={e.name}
                            img={e.img}
                        />
                    ))
                    }
            </div>
        </div>
    )
}