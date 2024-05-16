import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
	<>	
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
	</nav><br></br>
	<div className="container">
	<div className="container text-center">
		<div className="row">
			<div className="col">
			<div className="jumbotron">
				<h1 className="display-4">A Warm Welcome!</h1>
				<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
				It uses utility classes for typography and spacing to space content out within the larger container.</p>
				<p className="lead">
					<a className="btn btn-primary btn-lg" id="call-to" href="#" role="button">Call to Action</a>
				</p>
			</div>
			</div>
		</div><br></br>
		<div className="row">
			<div className="col">
				<div className="card" style= {{width:'18rem'}}>
					<img src="https://www.w3schools.com/images/w3schools_green.jpg" class="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" className="btn btn-primary">Find Our More!</a>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card" style= {{width:'18rem'}}>
						<img src="https://www.w3schools.com/images/w3schools_green.jpg" class="card-img-top" alt="..."/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Find Our More!</a>
						</div>
				</div>
			</div>
			<div claclassNamess="col">
				<div className="card" style= {{width:'18rem'}}>
					<img src="https://www.w3schools.com/images/w3schools_green.jpg" class="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" className="btn btn-primary">Find Our More!</a>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card" style= {{width:'18rem'}}>
					<img src="https://www.w3schools.com/images/w3schools_green.jpg" class="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" className="btn btn-primary">Find Our More!</a>
					</div>
				</div>
			</div>
		</div>
		</div>
	</div>
	<nav className="navbar sticky-bottom bg-body-tertiary py-0">
  		<div className="container-fluid mt-3">
    	<a className="navbar-brand" href="#">Copyright @ Your Website 2024</a>
  	</div>
</nav>
	</>
	);
};

export default Home;
