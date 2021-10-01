import axios from "axios";

const API_KEY = 'AIzaSyDyL5bPpNAVhy7qYOUjxdCsXXanjWTE13Y'

const api = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?key=" + API_KEY,
});

export default api;
