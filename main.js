import './style.css';
import {Loader} from 'google-maps';

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

document.getElementById('map').style.height = '100vh';

const loader = new Loader('my-api-key');

const google = await loader.load();
const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8,
});
