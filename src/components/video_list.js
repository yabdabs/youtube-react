import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = (props)=>{
	//video current value
	// const videoItems is an array. 
	const videoItems = props.videos.map((video)=>{
		return <VideoListItem key={video.etag} video={video} handleClickedVideo={props.handleClickedVideo} />
	})
	return(
		<div>
			<ul className = 'col-md-4 list-group'>
				{videoItems}
			</ul>
		</div>
	)
}

export default VideoList