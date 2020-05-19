import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';

import '../Assets/CSS/main-content.css';

import {
    Button,
    NavLink,
  } from "reactstrap";


function Login() {
    return (
        <div id="login" className="container d-flex flex-column justify-content-center container-size">
            <h3 className="text-center text-white pt-5 d-block">Please enter your credentials</h3>
            <div className="container d-block">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12 mt-5">
                            <form id="login-form" className="form" action="" method="post">
                                {/* <h3 className="text-center ">Login</h3> */}
                                <div className="form-group pt-4">
                                    <label for="username" className="">Username:</label><br></br>
                                    <input type="text" name="username" id="username" className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label for="password" className="">Password:</label><br></br>
                                    <input type="text" name="password" id="password" className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label for="remember-me" className=""><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"></input></span></label><br></br>
                                    {/* <input type="submit" name="submit" className="btn btn-info btn-md" value="submit"></input> */}
                                    <div className="text-center">
                                    <Button
                                        color="primary"
                                        type="button"
                                    >
                                        Log In
                                    </Button>
                                    </div>
                                </div>
                                <div id="register-link" className="text-right">
                                    {/* <a href="#" className="color_registroAqui">Register here</a> */}
                                    <NavLink tag={Link} to="/register" className='color_registroAqui'>Register here</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;






