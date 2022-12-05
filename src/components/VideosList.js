import React from "react";
import VideoItem from "./VideoItem";

const VideosList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map(video => {
        //return <img src={snippet.thumbnails.default.url} alt={snippet.description} />;
        return <VideoItem video={video} onVideoSelect={onVideoSelect} key={video.id.videoId} />;
    });

    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideosList;
