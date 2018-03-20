import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    const title = video.snippet.title;
    const img = video.snippet.thumbnails.default.url;
    return(
        // onClick fires off callback function onVideoSelect() using current video
        <div onClick={() => onVideoSelect(video)} className="video-list-item list-group-item">
            <div>{title}</div>
            <img src={img} />
        </div>
    );
}

export default VideoListItem;