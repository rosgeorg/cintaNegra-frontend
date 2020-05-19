import React from 'react';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

const AbForm = (props) => {
  return (
    <Form>
      {/* <FormGroup>
        <Label for="exampleCheckbox">Checkboxes</Label>
        <div>
          <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox" />
          <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Or this one" />
          <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="But not this disabled one" disabled />
          <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="Can't click this label to check!" htmlFor="exampleCustomCheckbox4_X" disabled />
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="exampleCheckbox">Radios</Label>
        <div>
          <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Select this custom radio" />
          <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Or this one" />
          <CustomInput type="radio" id="exampleCustomRadio3" label="But not this disabled one" disabled />
          <CustomInput type="radio" id="exampleCustomRadio4" label="Can't click this label to select!" htmlFor="exampleCustomRadio4_X" disabled />
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="exampleCheckbox">Switches</Label>
        <div>
          <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Turn on this custom switch" />
          <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="Or this one" />
          <CustomInput type="switch" id="exampleCustomSwitch3" label="But not this disabled one" disabled />
          <CustomInput type="switch" id="exampleCustomSwitch4" label="Can't click this label to turn on!" htmlFor="exampleCustomSwitch4_X" disabled />
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="exampleCheckbox">Inline</Label>
        <div>
          <CustomInput type="checkbox" id="exampleCustomInline" label="An inline custom input" inline />
          <CustomInput type="checkbox" id="exampleCustomInline2" label="and another one" inline />
        </div>
      </FormGroup> */}
      <FormGroup>
        <Label for="exampleCustomSelect">How long have you had abdominal pain?</Label>
        <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
          <option value="">Select</option>
          <option>0-24 Hours</option>
          <option>24-36 Hours</option>
          <option>36-48 Hours</option>
          <option>48-72 Hours</option>
          <option>More Than 72 Hours</option>
        </CustomInput>
      </FormGroup>
      <FormGroup>
        <Label for="exampleCustomSelect">Where is your abdominal pain located?</Label>
        <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
          <option value="">Select</option>
          <option>Entire abdomen</option>
          <option>Left part of the abdomen</option>
          <option>Right part of the abdomen</option>
          <option>Upper part of the abdomen</option>
          <option>Lower part of the abdomen</option>
        </CustomInput>
      </FormGroup>
      <FormGroup>
        <Label for="exampleCheckbox">Does the pain radiate of move to another location?</Label>
        <div className='d-flex flex-row'>
            <p>No </p>
          <CustomInput type="switch" id="locationSwitch" name="customSwitch" label="Yes" />
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="exampleCheckbox">Did your abdominal pain start all of a sudden or did it come on slowly?</Label>
        <div className='d-flex flex-row'>
            <p>Suddenly </p>
          <CustomInput type="switch" id="painSpeedSwitch" name="customSwitch" label="Slowly" />
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="exampleCheckbox">Does your abdominal pain occur after eating?</Label>
        <div className='d-flex flex-row'>
            <p>No </p>
          <CustomInput type="switch" id="eatingPainSwitch" name="customSwitch" label="Yes" />
        </div>
      </FormGroup>
      {/* <FormGroup>
        <Label for="exampleCustomMutlipleSelect">Custom Multiple Select</Label>
        <CustomInput type="select" id="exampleCustomMutlipleSelect" name="customSelect" multiple>
          <option value="">Select</option>
          <option>Value 1</option>
          <option>Value 2</option>
          <option>Value 3</option>
          <option>Value 4</option>
          <option>Value 5</option>
        </CustomInput>
      </FormGroup>
      <FormGroup>
        <Label for="exampleCustomSelectDisabled">Custom Select Disabled</Label>
        <CustomInput type="select" id="exampleCustomSelectDisabled" name="customSelect" disabled>
          <option value="">Select</option>
          <option>Value 1</option>
          <option>Value 2</option>
          <option>Value 3</option>
          <option>Value 4</option>
          <option>Value 5</option>
        </CustomInput>
      </FormGroup>
      <FormGroup>
        <Label for="exampleCustomMutlipleSelectDisabled">Custom Multiple Select Disabled</Label>
        <CustomInput type="select" id="exampleCustomMutlipleSelectDisabled" name="customSelect" multiple disabled>
          <option value="">Select</option>
          <option>Value 1</option>
          <option>Value 2</option>
          <option>Value 3</option>
          <option>Value 4</option>
          <option>Value 5</option>
        </CustomInput>
      </FormGroup>
      <FormGroup>
        <Label for="exampleCustomRange">Custom Range</Label>
        <CustomInput type="range" id="exampleCustomRange" name="customRange" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleCustomFileBrowser">File Browser</Label>
        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleCustomFileBrowser">File Browser with Custom Label</Label>
        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="Yo, pick a file!" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleCustomFileBrowser">File Browser Disabled</Label>
        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" disabled />
      </FormGroup> */}
    </Form>
  );
}

export default AbForm;