import React from 'react'
import Card from '../Components/Card'
import {useDentistStates} from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {dentistList, loading} = useDentistStates();

  return (
    <main>
      <div className='card-grid'>
          {!loading ? (
            dentistList.map((dentist) => (
              <Card id={dentist.id} name={dentist.name} username={dentist.username} key={dentist.id}/>
          ))) : <h2>Cargando...</h2>}
        
      </div>
    </main>
  )
}

export default Home