import axios from "axios";

const API_KEY = 'AIzaSyDyL5bPpNAVhy7qYOUjxdCsXXanjWTE13Y'

export const searchLocations = (query) => {
    let config = {
        method: 'get',
        url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?origin=*&query='+ query +'&key='+ API_KEY,
        headers: { }
    };
    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}
