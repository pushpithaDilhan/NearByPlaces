import React, { Component } from 'react';
import Search from './components/Search';
import ResultList from './components/ResultList';
import SideList from './components/SideList';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      results:{},
      saved:[]
    }
  }

  updateState(value){
    this.setState({
      results:value
    })
  }

  addSaved(value){
    const places = this.state.saved.concat(value);
    this.setState({
      saved:places
    })   
    console.log(this.state.saved); 
  }

  render() {
    return (
      <div>
        <Search callUpdate={this.updateState.bind(this)} />
        <div className="row">
          <div className="col-md-8">
            <ResultList resultPlaces={this.state.results}
                        addToSaved={this.addSaved.bind(this)}
            />
          </div>
          <div className="col-md-4">       
            <SideList savedPlaces={this.state.saved} />     
          </div>
        </div>
      </div>
    );
  }
}

export default App;
