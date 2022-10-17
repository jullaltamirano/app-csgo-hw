import './App.css';
import Nav from './components/nav'
import './styles/global.css'
import Home from './components/home';
import { Route } from 'react-router-dom'
import data from './data';
import Weapons from './components/weapons';
import Weapon from './components/weapon';

function App() {

  function onFilter(weaponName) {
    let detailedWeapon = data.filter((e) => e.name === weaponName);
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
      <Route exact path='/weapons'> 
        <Weapons
          weapons={data}
        />
      </Route>
      <Route exact path='/weapons/:weaponName' render={({match}) => <Weapon weapons={onFilter(match.params.weaponName)}/>}/>
    </div>
  );
}

export default App;
