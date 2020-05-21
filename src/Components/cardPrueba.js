import React from 'react'

function CardsTest(props) {
    // console.log(props)
    return (
        <div className="card fix">

            <div className="card-body card_font">
                <h5 className="card-title">{props.rendering}</h5>
                <p className="card-text "> ID: {props.chiefComplaint}
                    </p>
            </div>
        </div>
    )

}

export default CardsTest;