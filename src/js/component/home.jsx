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
		<Hero 
			nflUrl="https://www.nfl.com/"
		/>
		<div className="contentSec">
			<Card 
				imageUrl="https://upload.wikimedia.org/wikipedia/commons/2/24/Jefferson_2022.jpg"
				imageText="Justin Jefferson"
				cardTitle="Justin Jefferson"					
				cardBody="As of June 3, 2024, Justin Jefferson of the Minnesota Vikings 
								is the highest paid wide receiver in the NFL, with an annual 
								salary of $35 million. Jefferson's four-year, $140 million 
								contract is the largest in NFL history for a wide receiver by 
								both total value and average annual value. "
				callToActionUrl="https://www.youtube.com/watch?v=MzaRekgSbFE"
				/>
			<Card 
				imageUrl="https://ekcfbmsotzc.exactdn.com/en/blog/wp-content/uploads/2023/01/NFL-AJ-Brown-Eagles-BetMGM-1.jpg?strip=all&lossy=1&ssl=1"
				imageText="A.J. Brown"
				cardTitle="A.J. Brown"					
				cardBody="A.J. Brown officially signed his NFL-record contract Tuesday. The 
						 three-year extension is worth as much as $96 million. The average annual 
						 value set a record for wide receivers at $32 million, surpassing the $30 
						 million deal signed last week by Detroit's Amon-Ra St. Brown."
				callToActionUrl="https://www.youtube.com/watch?v=cPKkTF1-pMc"
			/>
			<Card 
				imageUrl="https://s.yimg.com/ny/api/res/1.2/GsTtEq7nj4tVhFvRuOvwNA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/en/csnchicago.com/c9fd09dc5161142d94614fa0d95b9337"
				imageText="Amon-Ra St."
				cardTitle="Amon-Ra St."					
				cardBody="Amon-Ra St. Brown signed a 4 year , $120,010,000 contract with the Detroit 
						 Lions, including $16,500,000 signing bonus, $77,000,000 guaranteed, and an 
						 average annual salary of $30,002,500. In 2024 NFL Media reported Wednesday. 
						 Guaranteed money for a wide receiver and tied for the WR." 
				callToActionUrl="https://www.youtube.com/watch?v=r1mPzCqMZjM"
			/>
			<Card 
				imageUrl="https://images2.minutemediacdn.com/image/upload/c_crop,w_6000,h_3375,x_0,y_183/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/229/01j01vesmv4qr0wywnfj.jpg"
				imageText="Tyreek Hill"
				cardTitle="Tyreek Hill"					
				cardBody="Hill's $120 million contract runs through the 2026 season and will pay him 
						 $19.7 million in base salary this upcoming season. Dolphins fans will be pleased 
						 to see just how intent Hill was on staying with the team, despite being good enough 
						 to head to other teams where he would almost certainly be paid a lot more money."
				callToActionUrl="https://www.youtube.com/watch?app=desktop&v=Vv0nlFv9Xrc"
			/>
		</div>
		<Footer />
	</>
	);
};

export default Home;





