import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Navbar from './Navbar';
import Video from '././images/city.mp4';
import 'mapbox-gl/dist/mapbox-gl.css';
import Cloudy from './images/cloudy.svg';
import Windy from './images/windy.svg';
import Rain from './images/rain.svg';
import Pressure from './images/pressure.svg';
import Temp from './images/temp.svg';
import './style.css';

mapboxgl.accessToken = 'pk.eyJ1IjoicGFqb3NsYXYtIiwiYSI6ImNrdnlnamJlejBiMWsyb212YmNvMHRoOXMifQ.HxAJACgZRLe5WU5dsmqeSg';

function App() {
    const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [lng, lat],
    zoom: zoom
    });
    });
    
  return (
    <div className="App scroller">
        <video src={Video} autoPlay loop muted disablePictureInPicture></video>
      <section className="main">
        <div className="flex-content">
        <header className="App-header">
          <Navbar/>
        </header>
        <div className="weather-info container">
          <div className="weather-content">
            <p className="temp">16°</p>
            <div className="city-info">
              <p className="city">London</p>
              <p className="time">06:09 - Monday 9 sep 19'</p>
            </div>
            <div className="weather-short">
              <img src={Cloudy} alt="" className="weather-icon" />
              <p className="weather-type">Cloudy</p>
            </div>
          </div>
        </div>

        </div>
        <div className="weather-detail-info">
          <div className="weather-detail-content container">
            <div className="left">
              <p class="title">Forecast for London, GB</p>
              <div className="stat-container">
                <div className="col">
                  <div className="stat">
                          <img src={Cloudy} alt="" className="stat-img" />
                          <div className="stat-info">
                            <p className="stats ovr">Overall </p>
                            <span>Rainy</span>
                          </div>
                    </div>
                    <div className="stat">
                          <img src={Temp} alt="" className="stat-img " />
                          <div className="stat-info">
                            <p className="stats ovr">Temperature </p>
                            <span>21°</span>
                          </div>
                    </div>
                </div>
                <div className="col space">
                  <div className="stat">
                          <img src={Rain} alt="" className="stat-img " />
                          <div className="stat-info">
                            <p className="stats ovr">Humidity </p>
                            <span>96%</span>
                          </div>
                    </div>
                    <div className="stat">
                        <img src={Cloudy} alt="" className="stat-img " />
                        <div className="stat-info">
                          <p className="stats ovr">Clouds </p>
                          <span>100%</span>
                        </div>
                  </div>
                </div>
                <div className="col space">
                    <div className="stat">
                            <img src={Windy} alt="" className="stat-img" />
                            <div className="stat-info">
                              <p className="stats ovr">Wind </p>
                              <span>16 km/h</span>
                            </div>
                      </div>
                      
                    <div className="stat">
                          <img src={Pressure} alt="" className="stat-img " />
                          <div className="stat-info">
                            <p className="stats ovr">Pressure </p>
                            <span>1019 mbar</span>
                          </div>
                    </div>
                </div>
                
              </div>
              
              
            </div>
            <div className="right">
              <div>
                <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>
                <div ref={mapContainer} className="map-container" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default App;
