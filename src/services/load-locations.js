export const loadLocations = async (query) => {
    const API_KEY = 'AIzaSyDyL5bPpNAVhy7qYOUjxdCsXXanjWTE13Y'
    const PLACES_URL = 'https://maps.googleapis.com/maps/api/place'
    const CORS_URL = 'https://cors-anywhere.herokuapp.com/'

    let myHeaders = new Headers();
    let myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };
    let data = undefined;
    await fetch(
        CORS_URL + PLACES_URL + '/textsearch/json?region=br&key=' + API_KEY + '&query='
        + query, myInit)
        .then((response) => {
            data = response.json();
        })
        .catch((error) => {
            console.log(error);
        });

    data = await data;
    let locations = []
    data.results.forEach((location, i) => {
        locations.push({
            id: i,
            address: location.formatted_address,
            lat: location.geometry.location.lat,
            lng: location.geometry.location.lng,
        })
    });
    return locations;
}



