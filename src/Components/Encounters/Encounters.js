import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { Redirect } from 'react-router-dom';

import {

    Button

} from 'reactstrap';

import '../../Assets/CSS/scheduleStyles.css'

const Encounters = (props) => {

    const { isAuth, axiosInstance } = useContext(AuthContext);
    if (!isAuth) return (<Redirect to="/login" />)
    

    const onSubmitHandler = (e) => {

        console.log('Hola');

        return (

            axiosInstance.delete(`https://erm-devf-backend.herokuapp.com/api/v1/encounters/${props.id}`)
                .then((result) => {
                    console.log(result);
                    alert('Encounter Deleted!');
                    window.location.reload();
                }).catch((err) => {
                    console.log(err.response.data);
                    alert('No funcionó');
                })

        )

    }
    
    const idExport = (e) => {

        const exportedId = e.target.value;

        return(exportedId)

    }


    return (
        
        <tr>
            <th scope="row"><Button value={props.id} onClick={idExport} tag={Link} to="/subjective" className='appointment-button'>{props.id}</Button></th>
            <td>{props.schedule}</td>
            <td className='left-text'>{props.name} {props.lastName}</td>
            <td>{props.dob}</td>
            <td>{props.sex}</td>
            <td className='d-flex justify-content-center'><Button className='remove-button' onClick={onSubmitHandler}>Remove</Button></td>
        </tr>

    );
}

export default Encounters;
