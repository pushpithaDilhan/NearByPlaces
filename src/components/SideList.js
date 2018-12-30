import React, {Component} from 'react';

class SideList extends Component{

	render(){
		console.log("sidelist", this.props.savedPlaces);
		var output = []

		for (var i = 0; i < this.props.savedPlaces.length; i++) {
    		output.push(<li>
    			<div className="card card-margin">
    			<div className="card-body">
    			{this.props.savedPlaces[i]}     			
    			</div>    			
    			</div>
    			</li>);
    	}

		return(
			<div>
				<div>
            		<h4 className="container">Saved Places</h4>            		
            		<hr/>
					<ul className="container"> {output} </ul>
				</div>
			</div>
		);		
	}
}

export default SideList;