import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VideosList from "./VideosList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos("Avatar");
    useEffect(
        () => {
            setSelectedVideo(videos[0]);
        },
        [videos]
    );

    //using semantic-ui grid styling, not css
    //default columns = 16 in semantic-ui, use 11 for video player, 5 for videolist
    return (
        <div className="ui container" style={{ marginTop: "10px" }}>
            <SearchBar onSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideosList videos={videos} onVideoSelect={setSelectedVideo} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
