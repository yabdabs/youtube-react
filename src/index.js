import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import YoutubeSearch from 'youtube-api-search'
import VideoDetail from './components/video_detail'

const API_KEY = "AIzaSyAcQedWBX5pdGxGqOtOJzS5RT5jeuam7Ls";


class App extends React.Component{
	constructor(){
		super();

		this.state = {
			videos: [],
			term: '',
			selectedVideo: null
		}
	}

	youtubeCall=(term) =>{
		//videos arguement is what we get back from the youtube npm call
		YoutubeSearch({key: API_KEY, term: term}, (videos)=>{
			//es6 for videos: videos
			console.log(`videos from the youtube call`)
			console.log(videos)
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			})
		})
	}

	handleClickedVideo =(video) =>{
		this.setState({
			selectedVideo: video
		})
	}

	render(){
		return(
			<div>
				<SearchBar youtubeCall={this.youtubeCall} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList videos= {this.state.videos} handleClickedVideo={this.handleClickedVideo} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector(".container"))