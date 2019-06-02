import React from 'react';

const InputForm = ({onInputChange}) =>{
	return(
		<div> 
			<input onChange={onInputChange} type='text'/>
			<button type='submit'>Search</button> 
		</div>
	)
}

export default InputForm;