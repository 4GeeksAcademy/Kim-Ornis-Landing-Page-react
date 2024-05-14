import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
	<>	
	<nav class="navbar fixed-top bg-body-tertiary">
  		<div class="container-fluid">
    		<a class="navbar-brand" href="#">Start Bootstrap</a>
			<div className="nav-links">
			<a class="navbar-brand" href="#">Home</a>
			<a class="navbar-brand" href="#">About</a>
			<a class="navbar-brand" href="#">Services</a>
			<a class="navbar-brand" href="#">Contact</a>
			</div>
  		</div>
	</nav><br></br>
	<div className="container">
	<div class="container text-center">
		<div class="row">
			<div class="col">
			<div class="jumbotron">
				<h1 class="display-4">A Warm Welcome!</h1>
				<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
				<hr class="my-4"></hr>
				<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
				<p class="lead">
					<a class="btn btn-primary btn-lg" href="#" role="button">Call to Action</a>
				</p>
			</div>
			</div>
		</div><br></br>
		<div class="row">
			<div class="col">
				<div class="card" style= {{width:'18rem'}}>
					<img src="img/nando.jpeg" class="card-img-top" alt="..."/>
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">Find Our More!</a>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="card" style= {{width:'18rem'}}>
						<img src="..." class="card-img-top" alt="..."/>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Find Our More!</a>
						</div>
				</div>
			</div>
			<div class="col">
				<div class="card" style= {{width:'18rem'}}>
					<img src="..." class="card-img-top" alt="..."/>
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">Find Our More!</a>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="card" style= {{width:'18rem'}}>
					<img src="..." class="card-img-top" alt="..."/>
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">Find Our More!</a>
					</div>
				</div>
			</div>
		</div>
		</div>
	</div>
	<nav class="navbar sticky-bottom bg-body-tertiary">
  		<div class="container-fluid">
    	<a class="navbar-brand" href="#">Copyright @ Your Website 2024</a>
  	</div>
</nav>
	</>
	);
};

export default Home;
