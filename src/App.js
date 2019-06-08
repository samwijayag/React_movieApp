import React,{Component} from 'react';
import InputForm from './Components/Js/InputForm';
import MovieList from './Components/Js/MovieList';
import './App.css';


class App extends Component{
	constructor(){
		super()
		this.state = {
			input: '',
		}
	}

	onInputChange = (event) => {
		this.setState({input:event.target.value})
	}

	render(){
		return (
		    <div className="App">
		     	<InputForm onInputChange={this.onInputChange} />
		     	<MovieList />
		    </div>
		  );
		}
 
}

export default App;
