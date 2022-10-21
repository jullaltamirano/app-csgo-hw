import s from './weapon.module.css'
import { useState } from 'react';
import { addToFavorite } from '../../redux/actions'
import { useDispatch } from 'react-redux';

export default function Weapon({weapons}){

    const dispatch = useDispatch()

    let [currentAmmo , setCurrentAmmo] = useState(weapons.magazine)

    let audioShoot = new Audio();
    audioShoot.src = weapons.bulletSound
    audioShoot.volume = 0.03;

    let audioReload = new Audio();
    audioReload.src = weapons.reloadSound;
    audioReload.volume = 0.2;

    let audioEmpty = new Audio();
    audioEmpty.src = weapons.emptyMagazine;
    audioEmpty.volume = 0.3;

    return (
        <div className={s.container}>
            <h3>{weapons.name}</h3>
            <button
                onClick={(e) => dispatch(addToFavorite(weapons))}
            >♥ Add to Favorite</button>
            <img src={weapons.render} className={s.weapon_img}/>            
            <div className={s.div_container}>
                <div className={s.bullet_container}>
                    <div className={s.bullets}>
                        <img 
                            src={weapons.bullet} 
                            className={s.bullet_img} 
                            onClick = {(e) => {
                                if(currentAmmo > 0){
                                    audioShoot.play();
                                    setCurrentAmmo(oldAmmo => oldAmmo - 1)
                                } else {
                                    audioEmpty.play()
                                }
                            }}
                        />
                        <span>{`${currentAmmo}/${weapons.magazine}`}</span>
                        {currentAmmo === 0 ? (<span className={s.noBalas}>No tienes balas</span>) : null}
                    </div>
                    <img 
                        src="https://images-ext-2.discordapp.net/external/lduDkmlLHeocWS5M1Za-glIPbvISbJh7dzcfTx8y-Ek/https/cdn-icons-png.flaticon.com/512/100/100487.png" 
                        className={s.reload_img}
                        onClick = {(e) => {
                            audioReload.play();
                            setCurrentAmmo(weapons.magazine)
                        }}
                    />
                </div>
                <div className={s.stats_container}>
                    <span><b>Stats:</b></span>
                    <div className={s.ul_container}>
                        <ul>
                            <li>Price: <b>{weapons.stats.price}</b></li>
                            <li>Caliber: <b>{weapons.stats.caliber}</b></li>
                            <li>Magazine: <b>{weapons.stats.mag}</b></li>
                            <li>Rof: <b>{weapons.stats.rof}</b></li>
                            <li>Used by T: <b>{weapons.stats.used_by_t}</b></li>
                        </ul>
                        <ul>
                            <li>Used by CT: <b>{weapons.stats.used_by_ct}</b></li>
                            <li>Reload Time: <b>{weapons.stats.reload_time}</b></li>
                            <li>Movement Speed: <b>{weapons.stats.movement_speed}</b></li>
                            <li>Kill Award: <b>{weapons.stats.kill_award}</b></li>
                            <li>Accurate Range: <b>{weapons.stats.accurate_range}</b></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}