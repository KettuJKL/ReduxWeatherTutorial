import axios from 'axios';

const API_KEY = '370d82dd469d5c8a05ab466fd541fc9d'; // My api key for the open weather map
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appId=${API_KEY}`

// Action type, used by actions and reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},fi`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
