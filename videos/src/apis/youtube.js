import axios from 'axios';


const KEY = 'AIzaSyATFg5Fm7fkIFna0mcDz3rK_dPwqZ825hc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippit',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})