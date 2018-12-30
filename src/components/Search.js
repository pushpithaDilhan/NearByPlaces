import React, {Component} from 'react';
import axios from 'axios';

class Search extends Component{

	getKey(e){
		e.preventDefault();
		const city = this.refs.inputcity.value;
		const update = this.props;
		
		axios.post('http://localhost:3001/getLocations', {
		    typedCity: city
		  })
		  .then(function (response) {
		    update.callUpdate(response.data.data);
		  })
		  .catch(function (error) {
		    console.log(error);
		});

		
	}

	render(){
		return(
			<div>
		        <div className="navbar navbar-expand-lg navbar-dark bg-primary" >
		          <div className="collapse navbar-collapse" id="navbarColor01">      
		          <h3 className="col-md-4">Near by Places</h3>
		            <form className="col-md-8 form-inline my-2 my-lg-0 header" id="Searchbar" >
		              <div className="input-group">
		              	<input size="50" type="text" className="form-control" ref="inputcity" placeholder="Search Places"/>
		              	<span className="input-group-btn">
		              		<button className="btn btn-danger" type="button" onClick={this.getKey.bind(this)}>Search</button>
		              	</span>
		              </div>  
		            </form>
		          </div>
		        </div>
		    </div>
		);
	}
}

export default Search;