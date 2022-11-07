import React from 'react';

const SearchBox = (props) => {
	return (
		
		<div className='col col-sm-3 d-flex'>
			<i class="bi bi-search ">  </i>
			<input			
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Ara...'
			></input>


		</div>
	);
};

export default SearchBox;
