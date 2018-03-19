import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    const title = video.snippet.title;
    const img = video.snippet.thumbnails.default.url;
    return(
        <div onClick={() => onVideoSelect(video)} className="list-group-item">
            <div>{title}</div>
            <img src={img} />
        </div>
    );
}

export default VideoListItem;