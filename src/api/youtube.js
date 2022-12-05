import axios from "axios";

const KEY = "AIzaSyCHqDCIfifisGo885bgqu_3Vz8GzUVMgY8";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY
    }
});
