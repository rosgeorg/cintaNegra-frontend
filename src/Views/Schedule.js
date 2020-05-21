import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Encounters from '../Components/Encounters';
// Conexion a mi websocket
// El web socket retorna un objeto con datos

const Schedule = () => {
  const { axiosInstance } = useContext(AuthContext);
  const [encounters, setEncounters] = useState([]);
  const [text, setText] = useState('Loading books...');

  const getEncounters = () => axiosInstance.get('/api/v1/encounters/');

  useEffect( () => {
    getEncounters()
      .then((response) => {
          console.log(response.data);
        const encounters = response.data;
        setEncounters(encounters);
        setText(`There is ${encounters.length} books available`);
      })
      .catch(() => setText(`There are no books available`));
  }, [])

  return (
    <React.Fragment>
      <h1>Available books</h1>
      <h2 className="mb-4"> { text } </h2>
      { encounters.map((encounter) => {
        console.log(encounter.pt);
        return <Encounters
        //   key={ecounter._id}
          id={encounter._id}
          name={encounter.pt ? encounter.pt.name : 'No tiene pt'}
          lastName={encounter.pt ? encounter.pt.lastName : 'No tiene pt'}
          schedule={encounter.schedule} />
      })}
    </React.Fragment>
  );
}

export default Schedule;