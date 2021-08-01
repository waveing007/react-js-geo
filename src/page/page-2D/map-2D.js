import "./map.css";
import $ from "jquery";
import React from "react";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';


function Map2D() {

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
                  <h3 id='latitude'>162.651515</h3>
                </div>
                <div className='col'>
                  <label for='LongTitude' className='font-label-header'>Longitude</label>
                  <h3 id='LongTitude'>184.161611</h3>
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
          <MapContainer center={[19.02580, 99.89765]} zoom={18} >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
            />
          </MapContainer>
        </div>
      </div>
    </>


  );
}

export default Map2D;
