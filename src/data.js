import ak from './sounds/ak47/ak47.wav'
import akReload from './sounds/ak47/ak47_reload.wav'
import emptyRifle from './sounds/ak47/empty_rifle.wav'

const ak47 = {
    name: 'Ak47',
    img: 'https://fpschampion.com/wp-content/uploads/2022/08/best-ak-47-skins.jpg',
    render: 'https://i.im.ge/2022/10/17/2UXosD.ak47.png',
    bullet: 'https://i.im.ge/2022/10/18/2igYLa.Ak47-bala-7-62.png',
    currentAmmo: 30,
    magazine: 30,   
    bulletSound: ak,
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
}

const glock = {
    name: 'Glock 18',
    img: 'https://fpschampion.com/wp-content/uploads/2022/08/best-ak-47-skins.jpg',
    render: 'https://i.im.ge/2022/10/17/2UoGT8.glock.png',
    bullet: 'https://i.im.ge/2022/10/18/2ig3Qx.Glock-bala-9mm.png',
    currentAmmo: 20,
    magazine: 20,   
    bulletSound: ak,
    reloadSound: akReload,
    emptyMagazine: emptyRifle,
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
}
const desertEagle = {
    name: 'Desert Eagle',
    img: 'https://cdn-images.win.gg/resize/w/1000/format/webp/type/progressive/fit/cover/path/wp/uploads/2021/07/are-desert-eagle-force-buys-the-new-meta-game-changers-in-csgo-question-mark.jpg',
    render: 'https://i.im.ge/2022/10/17/2UoeUh.desert-eagle.png',
    bullet: 'https://i.im.ge/2022/10/18/2igcny.desert-eagle-bala-50.png',
    currentAmmo: 7,
    magazine: 7,   
    bulletSound: ak,
    reloadSound: akReload,
    emptyMagazine: emptyRifle,
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
}
const awp = {
    name: 'Awp',
    img: 'https://i0.wp.com/fullsync.co.uk/wp-content/uploads/2021/12/AWP-Dragon-Lore.png?resize=934%2C524&ssl=1',
    render: 'https://i.im.ge/2022/10/17/2UXQ4Y.awp.png',
    bullet: 'https://i.im.ge/2022/10/18/2igbxJ.awp-bala-338.png',
    currentAmmo: 10,
    magazine: 10,   
    bulletSound: ak,
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
}

const m4a4 = {
    name: 'M4A4',
    img: 'https://fpschampion.com/wp-content/uploads/2022/08/best-ak-47-skins.jpg',
    render: 'https://i.im.ge/2022/10/17/2UXMYM.m4a4.png',
    bullet: 'https://i.im.ge/2022/10/18/2igE8G.m4a4-bala-5-56.png',
    currentAmmo: 30,
    magazine: 30,   
    bulletSound: ak,
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
}

const usps = {
    name: 'Usp-S',
    img: 'https://fpschampion.com/wp-content/uploads/2022/08/best-ak-47-skins.jpg',
    render: 'https://i.im.ge/2022/10/17/2UXXt4.ups-s.png',
    bullet: 'https://i.im.ge/2022/10/18/2igWk6.ups-bala-45.png',
    currentAmmo: 12,
    magazine: 12,   
    bulletSound: ak,
    reloadSound: akReload,
    emptyMagazine: emptyRifle,
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

var weapons = [ak47,awp,desertEagle,m4a4,glock,usps]

export default weapons;