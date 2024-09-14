import React from "react";
import doctorIMG from "../assets/images/doctor.jpg";
import { Link, useNavigate } from "react-router-dom";
import {useDentistStates} from '../Components/utils/global.context'



const Card = ({ name, username, id, deletable }) => {

  const {setLocStrgDentist} = useDentistStates();

  const navigate = useNavigate();


  const verifyDuplication = (savedValue, id)=>{
    return savedValue.some(dentist => dentist.id === id);
  }


  const addFav = ()=>{
    const newDentist = {name:name, username:username, id:id};
    const savedValue = JSON.parse(localStorage.getItem('locStrgDentist'));

    if(verifyDuplication(savedValue, id)){ 
      alert('Este dentista ya está en favoritos')
    }else{
      savedValue.push(newDentist); 
      localStorage.setItem('locStrgDentist', JSON.stringify(savedValue))

      setLocStrgDentist(JSON.parse(localStorage.getItem('locStrgDentist')));

      alert('Dentista añadido a favoritos correctamente.')
    }
                        
  }

  const delFav = ()=>{
    const savedValue = JSON.parse(localStorage.getItem('locStrgDentist'));
    const newList = savedValue.filter((dentist) => dentist.id != id)
    localStorage.setItem('locStrgDentist', JSON.stringify(newList))

    setLocStrgDentist(JSON.parse(localStorage.getItem('locStrgDentist')));
  }

  return (
    <div className="card" >
        <img src={doctorIMG} alt="" />
        <Link to={`/dentist/${id}`}>{name}</Link>
        <p>ID: {id}</p>
        <p>Usuario: {username}</p>

        {deletable ? (<button onClick={delFav} className="favButton">Eliminar</button>) 
        : (<button onClick={addFav} className="favButton">Favorito</button>) 
        }
    </div>
  );
};

export default Card;
