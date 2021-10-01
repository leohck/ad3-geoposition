export const loadLocations = async (query) => {
    const API_KEY = 'AIzaSyDyL5bPpNAVhy7qYOUjxdCsXXanjWTE13Y'
    const PLACES_URL = 'https://maps.googleapis.com/maps/api/place'

    let myHeaders = new Headers();
    let myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };
    const response =  fetch(
        PLACES_URL + '/textsearch/json?region=br&key=' + API_KEY + '&query='
        + query, myInit);
    let [data] = await Promise.all([response]);
    return data.json();
}

//mc donalds em guarulhos