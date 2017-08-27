import React from "react"

//video=props.video as arguement
class VideoListItem extends React.Component{
	constructor(props){
		super(props)

	
	}

	//passing in {video} is the same as passing props and setting 'const video = props.video' in this function
	//originally we would pass props and do props.video
	//but, this is saying inside of props is a property called video
	//and it creates a variable called video


	clickVideo =()=>{
		this.props.handleClickedVideo(this.props.video)
	}

	render(){

		const video= this.props.video
		console.log(video)
		{video.snippet.title}

		return (
			<div key = {video.key}>
				<li className= 'list-group-item' onClick={this.clickVideo}>
					<div className= 'video-list media'>
						<div className= 'media-left'>
							<img className='media-object' src={video.snippet.thumbnails.default.url} />
						</div>

						<div className='media-body'>
							<div className='media-heading'>{video.snippet.title}</div>
						</div>
					</div>
				</li>
			</div>
		)
	}
}



export default VideoListItem