import React from 'react'

class SearchBar extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			term: ''
		}
	}

	//when the text box changes
	onInputChange = (event) =>{
		console.log(event.target.value)

		this.setState({
			term: event.target.value
		})
	}

	//when the submit button is clicked
	handleSubmit =(event)=>{
		event.preventDefault();

		//youtube npm function call passing in the search term
		this.props.youtubeCall(this.state.term)
	}

	render(){
		return (
			<div>
				<input 
					onChange = {this.onInputChange}
					value = {this.state.term}
				/>
				<button
					type = 'submit'
					onClick = {this.handleSubmit}
				>Submit</button>

			</div>
		)
	}
}

export default SearchBar