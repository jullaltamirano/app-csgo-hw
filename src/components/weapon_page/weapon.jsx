import s from './weapon.module.css'
import { useState } from 'react';

export default function Weapon({weapons}){

    let [currentAmmo , setCurrentAmmo] = useState(weapons.magazine)

    let audioShoot = new Audio();
    audioShoot.src = weapons.bulletSound
    audioShoot.volume = 0.01;

    let audioReload = new Audio();
    audioReload.src = weapons.reloadSound;
    audioReload.volume = 0.01;

    let audioEmpty = new Audio();
    audioEmpty.src = weapons.emptyMagazine;
    audioEmpty.volume = 0.01;

    return (
        <div className={s.container}>
            <h3>{weapons.name}</h3>
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
                        {currentAmmo === 0 ? (<span>No tienes balas</span>) : null}
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
                            <li><b>Price: </b>{weapons.stats.price}</li>
                            <li><b>Caliber: </b>{weapons.stats.caliber}</li>
                            <li><b>Magazine: </b>{weapons.stats.mag}</li>
                            <li><b>Rof: </b>{weapons.stats.rof}</li>
                            <li><b>Used by T: </b>{weapons.stats.used_by_t}</li>
                        </ul>
                        <ul>
                            <li><b>Used by CT: </b>{weapons.stats.used_by_ct}</li>
                            <li><b>Reload Time: </b>{weapons.stats.reload_time}</li>
                            <li><b>Movement Speed: </b>{weapons.stats.movement_speed}</li>
                            <li><b>Kill Award: </b>{weapons.stats.kill_award}</li>
                            <li><b>Accurate Range: </b>{weapons.stats.accurate_range}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}