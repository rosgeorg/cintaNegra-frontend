import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../../Assets/CSS/navbar.css';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-color">
                <a className="navbar-brand" href="#">
                    <img className="logo_navbar" src="./LogoEMRHColor(copia2).png" alt="La imagen no existe o cambió su ubicación"></img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>     
                <div className="collapse navbar-collapse flexnav" id="navbarSupportedContent">
                    <button type="button" class="btn btn-success boton_registro my-2">Register</button>
                    {/* <a className="font_navbar" href="#">Register</a> */}
                </div>
                
            </nav>
        </div>
    )
}

export default Navbar;
