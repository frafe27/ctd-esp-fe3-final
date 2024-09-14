import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
 
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [dentist, setDentist] = useState({})

  const navigate = useNavigate();

  useEffect(()=>{
    setLoading(true);

    const fetchData = async () => {
      try{
        const dentistGet = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setDentist(dentistGet.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        navigate("/error")
      }
    }
    fetchData();
  },[]);

  return (
    <>
     {!loading ? (
      <div className='details'>
        <h2>Detalles del dentista con ID: {dentist.id} </h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Sitio Web</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dentist.name}</td>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>{dentist.website}</td>
            </tr>
          </tbody>
        </table>
      </div>
      ):(
        <h2>Cargando...</h2>
      )} 
      
    </>
  )
}

export default Detail