import React from 'react'
import { Link } from 'react-router-dom'
import {useDentistStates} from '../Components/utils/global.context'
import logo from '../assets/images/logo.png'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {themeDark, setThemeDark, state, dispatch} = useDentistStates();

  const handleTheme = (e) => {
    const checked = e.target.checked;
    checked ? dispatch({ type: "THEME_LIGTH"}) : dispatch({ type: "THEME_DARK"});
    checked ? setThemeDark(false) : setThemeDark(true);
  }

  return (
    <nav>
     <Link to={`/`}><img className = 'logo' src={logo} alt="logo" /></Link>
      <ul>
        <li><Link to={`/`}>Inicio</Link></li>
        <li><Link to={`/contact`}>Contacto </Link></li>
        <li><Link to={`/favs`}>Favoritos</Link></li>
        {/* <li><button onClick={handleTheme}>Change theme</button></li> */}
        <div className = 'toggleSwitch'>
            <label>
                {/* <input type = 'checkbox' onChange={handleTheme} checked={!themeDark}/> */}
                <input type = 'checkbox' onChange={handleTheme} checked={state.theme == "light"}/>
                <span className = 'slider'></span>
            </label>
        </div>
        
      </ul>
    </nav>
 
    
  )
}

export default Navbar