import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-a670e.firebaseio.com/'
});

export default instance;
