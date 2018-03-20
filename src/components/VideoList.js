import React from 'react';
import VideoListItem from './VideoListItem'

const VideoList = (props) => {
    // Create a list of <VideoListItem /> components each containing 
    // a video passed from index.js state
    const videoItems = props.videos.map(video => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                video={video}
                key={video.etag}
            />
        );
    })

    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;