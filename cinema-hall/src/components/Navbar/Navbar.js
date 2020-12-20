import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ padding:" 0 50px" }} >
            <a class="navbar-brand" href="#" style={{fontWeight:"600",fontSize: "24px"}}> Cinema Hall </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <NavLink to="/home" > <a class="nav-link"  > Home <span class="sr-only">(current)</span></a> </NavLink>
                    </li>
                    <li class="nav-item active">
                    <NavLink to="/" > <a class="nav-link"  > About <span class="sr-only">(current)</span></a> </NavLink>
                    </li>
                    <li class="nav-item active">
                        <NavLink to="/login" >  <a class="nav-link"> Login <span class="sr-only">(current)</span></a> </NavLink>
                    </li>
                    <li class="nav-item active">
                        <NavLink to="/signup" >  <a class="nav-link" > Sign Up <span class="sr-only">(current)</span></a>  </NavLink>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;