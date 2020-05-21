import React from 'react';
import { 
    
    Table,
    Button 

} from 'reactstrap';

import '../Assets/CSS/schedule.css'
import ModalAdd from '../Components/Modal'

const Encounters = (props) => {

    
    return (
        <div className='container d-flex align-items-center container-size'>
            <Table striped className='schedule-text' style={{borderRadius:'15px'}} >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Time</th>
                        <th className='left-text'>Patient</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{props.id}</th>
                        <td><Button className='appointment-button'>8:00 am</Button></td>
                        <td className='left-text'>BERNAL LIDIA</td>
                        <td>82</td>
                        <td>F</td>
                        <td className='d-flex justify-content-center'><ModalAdd>Add</ModalAdd><Button className='remove-button'>Remove</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">{props.id}</th>
                        <td><Button className='appointment-button'>9:00 am</Button></td>
                        <td className='left-text'>HURTADO ALEXIS</td>
                        <td>44</td>
                        <td>H</td>
                        <td className='d-flex justify-content-center'><Button className='add-button'>Add</Button><Button className='remove-button'>Remove</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">{props.id}</th>
                        <td><Button className='appointment-button'>10:00 am</Button></td>
                        <td className='left-text'>MATA EMILIO</td>
                        <td>56</td>
                        <td>H</td>
                        <td className='d-flex justify-content-center'><Button className='add-button'>Add</Button><Button className='remove-button'>Remove</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">{props.id}</th>
                        <td><Button className='appointment-button'>11:00 am</Button></td>
                        <td className='left-text'>TORRES AMBER</td>
                        <td>23</td>
                        <td>F</td>
                        <td className='d-flex justify-content-center'><Button className='add-button'>Add</Button><Button className='remove-button'>Remove</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">{props.id}</th>
                        <td><Button className='appointment-button'>12:00 pm</Button></td>
                        <td className='left-text'>{props.name}</td>
                        <td></td>
                        <td></td>
                        <td className='d-flex justify-content-center'><Button className='add-button'>Add</Button><Button className='remove-button'>Remove</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">{props.id}</th>
                        <td><Button className='appointment-button'>1:00 pm</Button></td>
                        <td className='left-text'>{props.name}</td>
                        <td></td>
                        <td></td>
                        <td className='d-flex justify-content-center'><Button className='add-button'>Add</Button><Button className='remove-button'>Remove</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">{props.id}</th>
                        <td><Button className='appointment-button'>{props.schedule}</Button></td>
                        <td className='left-text'>{props.name}</td>
                        <td></td>
                        <td></td>
                        <td className='d-flex justify-content-center'><Button className='add-button'>Add</Button><Button className='remove-button'>Remove</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">{props.id}</th>
                        <td><Button className='appointment-button'>3:00 pm</Button></td>
                        <td className='left-text'>{props.name}</td>
                        <td></td>
                        <td></td>
                        <td className='d-flex justify-content-center'><Button className='add-button'>Add</Button><Button className='remove-button'>Remove</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">{props.id}9</th>
                        <td><Button className='appointment-button'>4:00 pm</Button></td>
                        <td className='left-text'>Disponible</td>
                        <td></td>
                        <td></td>
                        <td className='d-flex justify-content-center'><Button className='add-button'>Add</Button><Button className='remove-button'>Remove</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Encounters;
