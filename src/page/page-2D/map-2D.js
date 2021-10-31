import "./map.css";
import React, { useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import L from "leaflet";
import icon from "./constants";
import "leaflet/dist/leaflet.css";
import axios from 'axios';


export default function Map2D() {

  const [mapMark, setMapMark] = useState({});
  const [mapLat, setMapLat] = useState('');
  const [mapLng, setMapLng] = useState('');
  const [deep, setDeep] = useState('');
  const [changYearMs, setChangYearMs] = useState('');

  const year = [
    { year: '2560' },
    { year: '2561' },
    { year: '2562' },
    { year: '2564' },
    { year: '2565' },
    { year: '2566' }
  ]

  function SetChangYearMs(event) {
    setChangYearMs(event.target.value);
  }

  function DynamicYear({ year }) {
    return (
      year.map((item, index) =>
        <option key={index} id={index} value={item.year}>
          {item.year}
        </option>)
    );
  }

  function MyComponent() {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        if (mapMark !== undefined) {
          map.removeLayer(mapMark);
        }
        setMapMark(L.marker([lat, lng], { icon }).addTo(map).bindPopup('Latitude : ' + lat.toFixed(5) + ' Longitude : ' + lng.toFixed(5)).openPopup());
        setMapLat(lat.toFixed(5));
        setMapLng(lng.toFixed(5));
        console.log(lat.toFixed(5), lng.toFixed(5));

        const data = { lat: lat.toFixed(5), lng: lng.toFixed(5), year: changYearMs }
        axios.post('http://localhost:4200/find-data-by-id', data).then((res) => {
          console.log(res.data);
          if (res.data.length !== 0) {
            setDeep(res.data[0].deep);
          } else {
            setDeep('-');
          }
        })
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
                  <label className='font-label-header'>Year</label>
                  <select className='form-control' id='selectYear' style={{ width: 200 }} value={changYearMs} onChange={SetChangYearMs}>
                    <DynamicYear year={year} />
                  </select>
                </div>
                <div className='col'>
                  <label className='font-label-header'>Latitude</label>
                  <h3 id='latitude'>{mapLat}</h3>
                </div>
                <div className='col'>
                  <label className='font-label-header'>Longitude</label>
                  <h3 id='LongTitude'>{mapLng}</h3>
                </div>
                <div className='col'>
                  <label className='font-label-header'>Deep</label>
                  <h3>{deep}</h3>
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



// const callAPiDataMap = () => {
//   axios.get('http://localhost:4200/map-data').then((res) => {
//     console.log(res.data);
//   })
// }
