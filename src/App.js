import './App.css';
import Nav from './components/Nav/nav'
import './styles/global.css'
import Home from './components/home/home';
import { Route } from 'react-router-dom'
import weapons from './data';
import Weapons from './components/weapons/weapons';
import Weapon from './components/weapon_page/weapon';
import About from './components/about/about';
import 'redux';
import { getWeapons } from './redux/actions';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Favorites from './components/favorites/favorites';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {dispatch(getWeapons(weapons))},[])

  let weapons2 = useSelector(state => state.weapons)
  let favorites = useSelector(state => state.favorites)

  function onFilter(weaponName) {
    let detailedWeapon = weapons2.filter((e) => e.name === weaponName);
      return detailedWeapon[0];    
  }

  return (
    <div>
      <header>
        <Nav />
      </header>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route exact path='/weapons'> 
        <Weapons
          weapons={weapons}
        />
      </Route>
      <Route exact path='/weapons/:weaponName' render={({match}) => <Weapon weapons={onFilter(match.params.weaponName)}/>}/>
      <Route path='/favorites'>
        <Favorites favorites={favorites}/>
      </Route>
    </div>
  );
}

export default App;
