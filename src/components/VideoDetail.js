import React from 'react';
import YoutubePlayer from 'react-youtube-player';

const VideoDetail = ({ selectedVideo }) => {
    if(!selectedVideo) {
        return <div>Loading..</div>;
    }
    const videoId = selectedVideo.id.videoId;
    const videoTitle = selectedVideo.snippet.title;
    const videoDescription = selectedVideo.snippet.description;

    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <YoutubePlayer
                    className="embed-responsive-item"
                    videoId={videoId}
                    height="100%"
                    width="100%"
                />
            </div>
            <div className="details">
                <div>{videoTitle}</div>
                <div>{videoDescription}</div>
            </div>
        </div>
    );
}

export default VideoDetail;