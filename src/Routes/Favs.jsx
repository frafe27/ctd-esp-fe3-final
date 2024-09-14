import React, { useEffect } from "react";
import Card from "../Components/Card";
import {useDentistStates} from '../Components/utils/global.context'


const Favs = () => {

  const {locStrgDentist} = useDentistStates();

  let favorites = JSON.parse(localStorage.getItem('locStrgDentist'));

  useEffect(()=>{
  },[locStrgDentist])

  return (
    <div className="favs">
      <h1>Dentistas en favoritos</h1>
      <div className="card-grid">
        {favorites.length > 0 ? (
            favorites.map((dentist) => (
              <Card id={dentist.id} name={dentist.name} username={dentist.username} key={dentist.id} deletable={true}/>
          ))) : <h2 className="no-favs">No has agreago dentistas</h2>}
      </div>
    </div>
  );
};

export default Favs;