import "./map.css";
import $ from "jquery";
import React, { useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import L from "leaflet";
import icon from "./constants";
import "leaflet/dist/leaflet.css";
import axios from 'axios';


var dataMap;
export default function Map2D() {
  if (!dataMap) callAPiDataMap();
  // var mapMark = {};
  const [mapMark, setMapMark] = useState({});
  const [mapLat, setMapLat] = useState('');
  const [mapLng, setMapLng] = useState('');

  function MyComponent() {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        if (mapMark != undefined) {
          map.removeLayer(mapMark);
        }
        setMapMark(L.marker([lat, lng], { icon }).addTo(map).bindPopup('Latitude : ' + lat.toFixed(6) + '\n' + 'Longitude : ' + lng.toFixed(6)).openPopup());
        setMapLat(lat.toFixed(6));
        setMapLng(lng.toFixed(6));
        console.log(lat.toFixed(6), lng.toFixed(6));
        dataMap.forEach(element => {
          if (element.latitude == lat.toFixed(6) && element.longitude == lng.toFixed(6)) {
            console.log('check');
          }
        });
      }
    });
    return null;
  }

  return (
    <>
      <div className='bg-content'>
        <div className='row clearMargin'>
          <div className='cardContent'>
            <div className='col-12'>
              <div className='row dataContent' >
                <div className='col'>
                  <label for='selectYear' className='font-label-header'>Year</label>
                  <select className='form-control' id='selectYear' style={{ width: 200 }}>
                    <option>2564</option>
                    <option>2563</option>
                    <option>2562</option>
                    <option>2561</option>
                    <option>2560</option>
                  </select>
                </div>
                <div className='col'>
                  <label for='latitude' className='font-label-header'>Latitude</label>
                  <h3 id='latitude'>{mapLat}</h3>
                </div>
                <div className='col'>
                  <label for='LongTitude' className='font-label-header'>Longitude</label>
                  <h3 id='LongTitude'>{mapLng}</h3>
                </div>
                <div className='col'>
                  <label className='font-label-header'>Deep</label>
                  <h3>29.30m</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row clearMargin map-content' >
          <MapContainer center={[19.02580, 99.89765]} zoom={18}  >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
            />
            <MyComponent />
          </MapContainer>
        </div>
      </div>
    </>
  );
}

const callAPiDataMap = () => {
  axios.get('http://localhost:4200/map-data').then((res) => {
    console.log(res.data);
    dataMap = res.data.data;
  })
}
