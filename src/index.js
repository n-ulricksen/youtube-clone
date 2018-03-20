import React, { Component } from 'react';
import ReactDOM             from 'react-dom';
import YTSearch             from 'youtube-api-search';
import _                    from 'lodash';
import SearchBar            from './components/SearchBar';
import VideoList            from './components/VideoList';
import VideoDetail          from './components/VideoDetail';

const API_KEY = 'AIzaSyBqmDNVwkjxp7QjFFilBw4zC8XYNm0fWHY';

class App extends Component {
    constructor(props) {
        super(props);

        // App state will keep track of a list of videos and a selected video
        this.state = {
            videos: [],
            selectedVideo: null
        };

        // Fire off initial search to fill state
        this.videoSearch('skateboards');
    }

    // Function for searching YouTube and updating state with 
    // a list of videos and a selected video
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, videos => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        // Throttle videoSearch function to only be called every 300ms
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return(
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail selectedVideo={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// Render app to .container in index.html
ReactDOM.render(<App />, document.querySelector('.container'));