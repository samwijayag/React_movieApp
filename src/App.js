import React,{Component} from 'react';
import InputForm from './Components/InputForm';
import './App.css';


class App extends Component{
	constructor(){
		super()
		this.state = {
			input: ''
		}
	}

	onInputChange = (event) => {
		this.setState({input:event.target.value})
	}

	render(){
		return (
		    <div className="App">
		     	<InputForm onInputChange={this.onInputChange} />
		    </div>
		  );
		}
 
}

export default App;
