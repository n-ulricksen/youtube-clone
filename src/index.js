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

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('skateboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, videos => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
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

ReactDOM.render(<App />, document.querySelector('.container'));