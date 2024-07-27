import React from "react";

export function Hero(props){

    const {nflUrl,} = props;
    
    return(
  
        <div className="container">
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div className="jumbotron">
                            <h1 className="display-4">A Warm Welcome!</h1>
                            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                                It uses utility classes for typography and spacing to space content out within the larger container.
                            </p>
                            <p className="lead">
                                <a className="btn btn-primary btn-lg" id="nflBtn" href={props.nflUrl} role="button">NFL.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};