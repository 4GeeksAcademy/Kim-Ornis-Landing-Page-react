import React from "react";

export function Card(){

    return(
		<div className="row">
			<div className="cardLine" style= {{width:'18rem'}}>
				<div className="card" style= {{width:'18rem'}}>
					<img src="https://www.w3schools.com/images/w3schools_green.jpg" className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" className="btn btn-primary">Find Our More!</a>
                    </div>
				</div>
			</div>
		</div>
    );
};
