import React from "react";

export function Nav(){

    return(
        <nav className="navbar fixed-top bg-body-tertiary py-0">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <div className="nav-links">
                    <a className="navbar-brand" href="#">Home</a>
                    <a className="navbar-brand" href="#">About</a>
                    <a className="navbar-brand" href="#">Services</a>
                    <a className="navbar-brand" href="#">Contact</a>
                </div>
            </div>
        </nav>
    );
};