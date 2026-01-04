import { useState, useEffect } from 'react';
import axios from 'axios';


const API_KEY = process.env.NEXT_PUBLIC_TENOR_API_KEY;
const url = `https://tenor.googleapis.com/v2/search?key=${API_KEY}&random=true&limit=1&media_filter=gif,tinygif`;

const useGif = (query) => { 
 
    const [gifUrl, setGifUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const topics = ["funny", "memes", "happy", "sad", "angry", "love", "dance", "celebration", "cats", "dogs", "fail", "reaction", "excited", "bored", "surprised", "crying", "laughing", "clapping", "party", "gaming", "food", "coffee", "meme face", "awkward", "cool", "high five", "yes", "no", "mind blown", "wow", "motivation"];
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];

    async function fetchData(query) {
        setLoading(true);
        const { data } = await axios.get(query ? `${url}&q=${query}` : `${url}&q=${randomTopic}`);
        const imageSource = data.results[0].media_formats.gif.url;
        setGifUrl(imageSource);
        setLoading(false);
    }


    return {gifUrl,loading,fetchData}
}

export default useGif