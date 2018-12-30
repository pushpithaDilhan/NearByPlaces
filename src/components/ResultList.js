import React, {Component} from 'react';

class ResultList extends Component{

	render(){
		var output = []
		
		for (var i = 0; i < this.props.resultPlaces.length; i++) {
			const place = this.props.resultPlaces[i]
    		output.push(<li>
    			<div className="card card-margin">
    			<div className="card-body">
    			{place} 
    			<button onClick={() => this.props.addToSaved(place)} className="btn btn-success float-right" type="button">Save</button>
    			</div>    			
    			</div>
    			</li>);
    	}

		return(<ul className="container">{output}</ul>);
	}
}

export default ResultList;