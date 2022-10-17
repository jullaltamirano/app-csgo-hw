import HomeWeapon from "./home_weapon";
import HomeMap from './home_map'
import s from '../styles/home.module.css'


export default function Home () {
    return (        
        <div className = {s.home_container}>            
            <HomeWeapon title='Weapons'/>
            <HomeMap title='Maps'/>
        </div>
    )           
}
