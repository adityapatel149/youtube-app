import { useEffect, useState } from "react";
import youtube from "../api/youtube";

const useVideos = defaultSearchTerm => {
    const [videos, setVideos] = useState([]);

    useEffect(
        () => {
            search(defaultSearchTerm);
        },
        [defaultSearchTerm]
    );

    //const onSearchSubmit = async term => { this name doesnt make sense in the hook, made sense in App.js only
    const search = async term => {
        console.log(term);
        const response = await youtube.get("/search", {
            params: { q: term }
        });

        setVideos(response.data.items);
    };

    return [videos, search];
    //React convention like useState, array
    //OR
    //return {videos, onSearchSubmit}
    //JS convention, object
};

export default useVideos;
