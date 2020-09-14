import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Encounters from '../Components/Encounters/Encounters';
// Conexion a mi websocket
// El web socket retorna un objeto con datos

//Aqui empieza

import {

    Table,

} from 'reactstrap';

import '../Assets/CSS/scheduleStyles.css'
import ModalAdd from '../Components/Modal'


const Schedule = (props) => {

    

      // Contexto
    const { isAuth, axiosInstance } = useContext(AuthContext);
    const [encounters, setEncounters] = useState([]);
    const [text, setText] = useState('Loading encounters...');


    const getEncounters = () => axiosInstance.get('/api/v1/encounters/');

    useEffect(() => {
        getEncounters()
            .then((response) => {
                console.log(response.data);
                const encounters = response.data;
                setEncounters(encounters);
                setText(`There is ${encounters.length} encounters available`);
            })
            .catch(() => setText(`There are no encounters available`));
    })

    if (!isAuth) return ( <Redirect to="/login" /> )


    return (

        <div className='container d-flex align-items-center container-size'>
            <Table striped className='schedule-text' style={{ borderRadius: '15px', position:'relative' }} >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Time</th>
                        <th className='left-text'>Patient</th>
                        <th>DOB</th>
                        <th>Sex</th>
                        <th><ModalAdd>Add</ModalAdd></th>
                    </tr>
                </thead>
                <tbody>
                    {encounters.map((encounter) => {
                        console.log(encounter.pt);
                        console.log(encounter);
                        return <Encounters
                            //   key={ecounter._id}
                            id={encounter._id}
                            name={encounter.pt ? encounter.pt.name : 'No Name'}
                            lastName={encounter.pt ? encounter.pt.lastName : ''}
                            schedule={encounter.schedule} 
                            dob={encounter.pt ? encounter.pt.dob : 'No DOB'}
                            sex={encounter.pt ? encounter.pt.sex : 'No Sex specified'}
                            />
                    })}
                </tbody>
            </Table>
        </div>

        // <React.Fragment>
        //   <h1>Available books</h1>
        //   <h2 className="mb-4"> { text } </h2>
        //   { encounters.map((encounter) => {
        //     console.log(encounter.pt);
        //     return <Encounters
        //     //   key={ecounter._id}
        //       id={encounter._id}
        //       name={encounter.pt ? encounter.pt.name : 'Disponible'}
        //       lastName={encounter.pt ? encounter.pt.lastName : ''}
        //       schedule={encounter.schedule} />
        //   })}
        // </React.Fragment>
    );
}

export default Schedule;