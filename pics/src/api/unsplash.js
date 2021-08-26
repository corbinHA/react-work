import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
                Authorization: 'Client-ID ni9Q3sBr72wvfVDJp-eDKW5icC33AwZs3KTJ-DeF-No'
            }
});

