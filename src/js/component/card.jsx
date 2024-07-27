import React from "react";

export function Card(props){

	const {
		imageUrl,
		imageText,
		cardTitle,
		cardBody,
		callToActionUrl,

	} = props;

    return(
		<div className="cardSec">
			<div className="card" style= {{width:'18rem'}}>
				<div className="card" style= {{width:'18rem'}}>
					<img src={props.imageUrl} className="card-img-top" alt={props.imageText}/>
					<div className="card-body">
						<h5 className="card-title">{props.cardTitle}</h5>
						<p className="card-text">{props.cardBody}</p>
						<a href={props.callToActionUrl} className="btn btn-primary" id="highlightBtn">Highlights</a>
                    </div>
				</div>
			</div>
		</div>
    );
};
