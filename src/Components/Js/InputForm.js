import React from 'react';
import '../CSS/InputForm.css'

const InputForm = ({onInputChange}) =>{
	return(
		<div className='search'> 
			<input 
				className='Input'
				onChange={onInputChange} 
				type='text'
				placeholder="search movies..."
				/>
			<button 
				className="btn"
				type='submit'>
				Search
			</button> 
		</div>
	)
}

export default InputForm;