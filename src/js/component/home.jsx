import React from "react";
import {Nav} from "./navBar";
import {Hero} from "./hero";
import {Card} from "./card";
import {Footer} from "./footer";


//create your first component
const Home = () => {
	return (
	<>	
		<Nav />
		<Hero />
		<div>
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
		<Footer />
	</>
	);
};

export default Home;





