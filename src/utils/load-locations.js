export const loadLocations = async (query) => {
    const API_KEY = 'AIzaSyDyL5bPpNAVhy7qYOUjxdCsXXanjWTE13Y'
    const PLACES_URL = 'https://maps.googleapis.com/maps/api/place'
    const locationsResponse = fetch(
        PLACES_URL + '/textsearch/json?region=br&key=' + API_KEY + '&query='
        + query, {mode: 'no-cors'})
        .then(data => {
            console.table(data);
            return data.json();
        }).catch(e => {
            console.log(e);
        });
}