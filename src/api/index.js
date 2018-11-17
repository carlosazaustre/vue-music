import config from './config';

const { apiKey } = config;
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=${apiKey}&format=json`;

export default function getArtists() {
  return fetch(URL)
    .then(res => res.json())
    .then(data => data.topartists.artist)
}
