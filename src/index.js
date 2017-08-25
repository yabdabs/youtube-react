import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import YoutubeSearch from 'youtube-api-search'

const API_KEY = "AIzaSyAcQedWBX5pdGxGqOtOJzS5RT5jeuam7Ls";


class App extends React.Component{
	constructor(){
		super();

		this.state = {
			videos: [],
			term: ''
		}
	}

	youtubeCall=(term) =>{
		//videos arguement is what we get back from the youtube npm call
		YoutubeSearch({key: API_KEY, term: term}, (videos)=>{
			//es6 for videos: videos
			this.setState({videos: videos})
		})
	}

	render(){
		return(
			<div>
				<SearchBar youtubeCall={this.youtubeCall}/>
				<VideoList videos= {this.state.videos}/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector(".container"))