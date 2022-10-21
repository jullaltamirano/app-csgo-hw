import ak_audio from './sounds/ak47/ak47.wav'
import akReload from './sounds/ak47/ak47_reload.wav'
import awp_audio from './sounds/awp/awp.wav'
import m4a4_audio from './sounds/m4a4/m4a4.wav'
import usp_audio from './sounds/usps/usp.wav'
import deagle_audio from './sounds/desert_eagle/deagle.wav'
import glock_audio from './sounds/glock/glock.wav'
import emptyRifle from './sounds/empty_rifle.wav'
import emptyPistol from './sounds/empty_pistol.wav'


const weapons = [
    {   name: 'Ak47',
        img: 'https://i.im.ge/2022/10/22/2Pu5j9.bannerak.jpg',
        render: 'https://i.im.ge/2022/10/17/2UXosD.ak47.png',
        bullet: 'https://i.im.ge/2022/10/18/2igYLa.Ak47-bala-7-62.png',
        currentAmmo: 30,
        magazine: 30,   
        bulletSound: ak_audio,
        reloadSound: akReload,
        emptyMagazine: emptyRifle,
        stats: {
            price: "$2500",
            caliber: "7.62",
            mag: "30/90",
            rof: "600 RPM",
            used_by_t: "yes",
            used_by_ct: "no",
            reload_time: "2.5 seconds",
            movement_speed: "221",
            kill_award: "$300",
            accurate_range: "31m"
            }
    },
    {   name: 'M4A4',
        img: 'https://i.im.ge/2022/10/22/2PuhzF.bannerm4.jpg',
        render: 'https://i.im.ge/2022/10/17/2UXMYM.m4a4.png',
        bullet: 'https://i.im.ge/2022/10/18/2igE8G.m4a4-bala-5-56.png',
        currentAmmo: 30,
        magazine: 30,   
        bulletSound: m4a4_audio,
        reloadSound: akReload,
        emptyMagazine: emptyRifle,
        stats: {
            price: "$3100",
            caliber: "5.56",
            mag: "30/90",
            rof: "666 RPM",
            used_by_t: "no",
            used_by_ct: "yes",
            reload_time: "3.1 seconds",
            movement_speed: "225",
            kill_award: "$300",
            accurate_range: "39m"
            }
    },
    {   name: 'Awp',
        img: 'https://i.im.ge/2022/10/22/2Pu9WX.bannerawp.jpg',
        render: 'https://i.im.ge/2022/10/17/2UXQ4Y.awp.png',
        bullet: 'https://i.im.ge/2022/10/18/2igbxJ.awp-bala-338.png',
        currentAmmo: 10,
        magazine: 10,   
        bulletSound: awp_audio,
        reloadSound: akReload,
        emptyMagazine: emptyRifle,
        stats: {
            price: "$4750",
            caliber: ".338",
            mag: "10/30",
            rof: "41 RPM",
            used_by_t: "yes",
            used_by_ct: "yes",
            reload_time: "3.6 seconds",
            movement_speed: "200",
            kill_award: "$100",
            accurate_range: "96m"
            }
    },
    {   name: 'Glock 18',
        img: 'https://i.im.ge/2022/10/22/2Pu0FK.banner-glock.jpg',
        render: 'https://i.im.ge/2022/10/17/2UoGT8.glock.png',
        bullet: 'https://i.im.ge/2022/10/18/2ig3Qx.Glock-bala-9mm.png',
        currentAmmo: 20,
        magazine: 20,   
        bulletSound: glock_audio,
        reloadSound: akReload,
        emptyMagazine: emptyPistol,
        stats: {
            price: "$200",
            caliber: "9mm",
            mag: "20/120",
            rof: "400 RPM",
            used_by_t: "yes",
            used_by_ct: "no",
            reload_time: "2.2 seconds",
            movement_speed: "250",
            kill_award: "$300",
            accurate_range: "28m"
            }
    },
    {   name: 'Desert Eagle',
        img: 'https://i.im.ge/2022/10/22/2PuUt6.bannerdeagle.jpg',
        render: 'https://i.im.ge/2022/10/17/2UoeUh.desert-eagle.png',
        bullet: 'https://i.im.ge/2022/10/18/2igcny.desert-eagle-bala-50.png',
        currentAmmo: 7,
        magazine: 7,   
        bulletSound: deagle_audio,
        reloadSound: akReload,
        emptyMagazine: emptyPistol,
        stats: {
            price: "$700",
            caliber: ".50",
            mag: "7/35",
            rof: "267 RPM",
            used_by_t: "yes",
            used_by_ct: "yes",
            reload_time: "2.2 seconds",
            movement_speed: "230",
            kill_award: "$300",
            accurate_range: "35m"
            }
    },
    {   name: 'Usp-S',
        img: 'https://i.im.ge/2022/10/22/2PuwUh.bannerusp.jpg',
        render: 'https://i.im.ge/2022/10/17/2UXXt4.ups-s.png',
        bullet: 'https://i.im.ge/2022/10/18/2igWk6.ups-bala-45.png',
        currentAmmo: 12,
        magazine: 12,   
        bulletSound: usp_audio,
        reloadSound: akReload,
        emptyMagazine: emptyPistol,
        stats: {
            price: "$200",
            caliber: ".45",
            mag: "12/24",
            rof: "352 RPM",
            used_by_t: "no",
            used_by_ct: "yes",
            reload_time: "2.2 seconds",
            movement_speed: "240",
            kill_award: "$300",
            accurate_range: "29m"
            }
    }
];

export default weapons;