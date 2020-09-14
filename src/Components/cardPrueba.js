import React from 'react'

import '../Assets/CSS/cardStyle.css';

function CardsTest(props) {
    // console.log(props)
    return (
        <div className="card fix">
            <div className="card-body card_font">
                <h5 className='subtitle-size'>Rendering: {props.rendering}</h5>
                <hr></hr>
                <p className="text-size"> Encounter ID: <span style={{fontWeight:'bold'}}>{props.id}</span></p>
                <p className="text-size">Chief Complaint: <span style={{fontWeight:'bold'}}>{props.chiefComplaint}</span></p>
                <p className="text-size">How long have you had abdominal pain?: <span style={{fontWeight:'bold'}}>{props.howLong}</span></p>
                <p className="text-size">Where is your abdominal pain location?: <span style={{fontWeight:'bold'}}>{props.whereIs}</span></p>
                <p className="text-size">Does the pain radiate or move to another location?: <span style={{fontWeight:'bold'}}>{props.painLocation}</span></p>
                <p className="text-size">Did your abdominal pain start all of a sudden or did it come out slowly?: <span style={{fontWeight:'bold'}}>{props.painAppear}</span></p>
                <p className="text-size">Does your abdominal pain occur after eating?: <span style={{fontWeight:'bold'}}>{props.eatingPain}</span></p>
            </div>
        </div>
    )

}

export default CardsTest;