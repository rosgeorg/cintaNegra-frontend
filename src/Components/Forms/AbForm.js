import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

import { CustomInput, Form, FormGroup, Label, Button } from 'reactstrap';


const AbForm = (props) => {

  // Contexto
  const { isAuth, axiosInstance } = useContext(AuthContext);

  // Estado
  const [howLong, setHowLong] = useState('');
  const [whereIs, setWhereIs] = useState('');
  const [painLocation, setPainLocation] = useState('');
  const [painAppear, setPainAppear] = useState('');
  const [eatingPain, setEatingPain] = useState('');

  // Redireccionar si el usuario no esta autentica
  if (!isAuth) return (<Redirect to="/login" />)

  // Funciones
  const formCleanup = () => {
    setHowLong('');
    setWhereIs('');
    setPainLocation('');
    setPainAppear('');
    setEatingPain('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jsonSend = {
      subjetive: {
        gastroIntestinal: {
          abdominalPain: {
            howLongHaveYouHadAbdominalPain: howLong,
            whereIsYourAbdominalPainLocated: whereIs,
            doesThePainRadiateOfMoveToAnotherLocation: painLocation,
            DidYourAbdominalPainStartAllOfASuddenOrDidItComeOnSlowly: painAppear,
            DoesYourAbdominalPainOccurAfterEating: eatingPain
          }
        }
      }
    }
  

  try {
    await axiosInstance.patch('/api/v1/encounters/5ec85c1e06fe8500177665a8', jsonSend);
    console.log(jsonSend);
    formCleanup();
    alert('info successfully added');
    window.location.reload();
  } catch (error) {
    alert(error);
  }
};


return (
  <Form onSubmit={handleSubmit}>
    <FormGroup>
      <Label for="howLong">How long have you had abdominal pain?</Label>
      <CustomInput type="select" id="howLong" name="howLongHaveYouHadAbdominalPain" value={howLong} onChange={(e) => setHowLong(e.target.value)}>
        <option value="">Select</option>
        <option>0-24 Hours</option>
        <option>1-3 Days</option>
        <option>4-7 Days</option>
      </CustomInput>
    </FormGroup>
    <FormGroup>
      <Label for="whereIs">Where is your abdominal pain located?</Label>
      <CustomInput type="select" id="whereIs" name="whereIsYourAbdominalPainLocated" value={whereIs} onChange={(e) => setWhereIs(e.target.value)}>
        <option value="">Select</option>
        <option>Entire Abdomen</option>
        <option>Upper Abdomen</option>
        <option>Lower Abdomen</option>
        <option>Left Abdomen</option>
        <option>Right Abdomen</option>
      </CustomInput>
    </FormGroup>
    <FormGroup>
      <Label for="locationSwitch">Does the pain radiate of move to another location?</Label>
      <CustomInput type="select" id="locationSwitch" name="doesThePainRadiateOfMoveToAnotherLocation" value={painLocation} onChange={(e) => setPainLocation(e.target.value)}>
        <option value="">Select</option>
        <option>Yes</option>
        <option>No</option>
      </CustomInput>
    </FormGroup>
    <FormGroup>
      <Label for="painSpeedSwitch">Did your abdominal pain start all of a sudden or did it come on slowly?</Label>
      <CustomInput type="select" id="painSpeedSwitch" name="DidYourAbdominalPainStartAllOfASuddenOrDidItComeOnSlowly" value={painAppear} onChange={(e) => setPainAppear(e.target.value)}>
        <option value="">Select</option>
        <option>Suddlendly</option>
        <option>Slowly</option>
      </CustomInput>
    </FormGroup>
    <FormGroup>
      <Label for="eatingPainSwitch">Where is your abdominal pain located?</Label>
      <CustomInput type="select" id="eatingPainSwitch" name="DoesYourAbdominalPainOccurAfterEating" value={eatingPain} onChange={(e) => setEatingPain(e.target.value)}>
        <option value="">Select</option>
        <option>Yes</option>
        <option>No</option>
      </CustomInput>
    </FormGroup>
    {/* <FormGroup>
      <Label for="locationSwitch">Does the pain radiate of move to another location?</Label>
      <div className='d-flex flex-row'>
        <p>No </p>
        <CustomInput type="switch" id="locationSwitch" name="doesThePainRadiateOfMoveToAnotherLocation" value={painLocation} onChange={(e) => setPainLocation(e.target.value)} label="Yes" />
      </div>
    </FormGroup>
    <FormGroup>
      <Label for="painSpeedSwitch">Did your abdominal pain start all of a sudden or did it come on slowly?</Label>
      <div className='d-flex flex-row'>
        <p>Suddlendly </p>
        <CustomInput type="switch" id="painSpeedSwitch" name="DidYourAbdominalPainStartAllOfASuddenOrDidItComeOnSlowly" value={painAppear} onChange={(e) => setPainAppear(e.target.value)} label="Slowly" />
      </div>
    </FormGroup>
    <FormGroup>
      <Label for="eatingPainSwitch">Does your abdominal pain occur after eating?</Label>
      <div className='d-flex flex-row'>
        <p>No </p>
        <CustomInput type="switch" id="eatingPainSwitch" name="DoesYourAbdominalPainOccurAfterEating" value={eatingPain} onChange={(e) => setEatingPain(e.target.value)} label="Yes" />
      </div>
    </FormGroup> */}
    <Button>Submit</Button>
  </Form>
);
}

export default AbForm;