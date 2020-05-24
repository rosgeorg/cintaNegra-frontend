import React from 'react'

function CardsTest(props) {
    // console.log(props)
    return (
        <div className="card fix">

            <div className="card-body card_font">
                <h5 className="card-title">Rendering: {props.rendering}</h5>
                <hr></hr>
                <p className="card-text "> Encounter ID: <span style={{fontWeight:'bold'}}>{props.id}</span></p>
                <p>Chief Complaint: <span style={{fontWeight:'bold'}}>{props.chiefComplaint}</span></p>
                <p>How long have you had abdominal pain?: <span style={{fontWeight:'bold'}}>{props.howLong}</span></p>
                <p>Where is your abdominal pain location?: <span style={{fontWeight:'bold'}}>{props.whereIs}</span></p>
                <p>Does the pain radiate or move to another location?: <span style={{fontWeight:'bold'}}>{props.painLocation}</span></p>
                <p>Did your abdominal pain start all of a sudden or did it come out slowly?: <span style={{fontWeight:'bold'}}>{props.painAppear}</span></p>
                <p>Does your abdominal pain occur after eating?: <span style={{fontWeight:'bold'}}>{props.eatingPain}</span></p>
            </div>
        </div>
    )

}

export default CardsTest;