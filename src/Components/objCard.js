import React from 'react'

function CardsTest(props) {
    // console.log(props)
    return (
        <div className="card fix">

            <div className="card-body card_font">
                <p>Blood Pressure (High):<span style={{fontWeight:'bold'}}> {props.highPressure}</span></p>
                <p>Blood Pressure (Low):<span style={{fontWeight:'bold'}}> {props.lowPressure}</span></p>
                <p>Pulse:<span style={{fontWeight:'bold'}}> {props.pulse}</span></p>
                <p>Temperature:<span style={{fontWeight:'bold'}}> {props.temp}</span></p>
                <p>Height:<span style={{fontWeight:'bold'}}> {props.height}</span></p>
                <p>Weight:<span style={{fontWeight:'bold'}}> {props.weight}</span></p>
                <p>BMI:<span style={{fontWeight:'bold'}}> {props.bmi}</span></p>
                <hr></hr>
            </div>
        </div>
    )

}

export default CardsTest;