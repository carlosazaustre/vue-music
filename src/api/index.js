import config from './config';

const { apiKey } = config;
const API_URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`;

export default function getArtists(country) {
  const url = API_URL.replace(':country', country);

  return fetch(url)
    .then(res => res.json())
    .then(data => data.topartists.artist)
}
