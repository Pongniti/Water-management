import React, { useState, useRef } from "react";
import "../Css/Home.css";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  Polygon,
  Circle,
  FeatureGroup,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw"
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import blue from "../pages/images/blue.png";
import blueoffline from "../pages/images/blueoffline.png";
import blueonline from "../pages/images/blueonline.png";
import gray from "../pages/images/gray.png";
import grayonline from "../pages/images/grayonline.png";

import devices from "../data/devices.json";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

// เก็บ marker icon แต่ละชนิด  
const markerIcons = [
  new L.Icon({
    iconUrl: require("../pages/images/gray.png"),
    iconSize: [35,45],
  }),
  new L.Icon({
    iconUrl: require("../pages/images/blue.png"),
    iconSize: [35,45],
  }),
  new L.Icon({
    iconUrl: require("../pages/images/grayonline.png"),
    iconSize: [35,45],
  }),
  new L.Icon({
    iconUrl: require("../pages/images/blueonline.png"),
    iconSize: [35,45],
  }),
  new L.Icon({
    iconUrl: require("../pages/images/blueoffline.png"),
    iconSize: [35,45],
  })
]

function home(this: any) {
  const HandleClickMap = () => {
    return null;
  };
  const MapEvents = () => {
    useMapEvents({
      click(e) {
        // setState your coords here
        // coords exist in "e.latlng.lat" and "e.latlng.lng"
        console.log(e.latlng.lat);
        console.log(e.latlng.lng);
      },
    });
    return null;
  }
  
  return (
    <div>
      <MapContainer
        style={{ height: "90vh" }}
        center={[13.85, 100.57]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <HandleClickMap />
        {/* <Circle center={this.state.center} fillColor="blue" radius={this.state.radius} />
            <Polygon color="purple" positions={polygon} /> */}
        {
        devices.data.map((data) => {
          return (
            <Marker position={[data.position[0], data.position[1]]} icon={markerIcons[data.id_markericon]} key={data.id}>
              
              <Popup>
                หมายเลขอุปกรณ์
                <div className="p-2 bg-light border"></div>
                <br />
                ที่อยู่ที่ติดตั้ง
                <div className="p-2 bg-light border"></div>
                <br />
                อัตราการใช้น้ำ
                <div className="p-2 bg-light border"></div>
                <br />
                อัตราการไหล
                <div className="p-2 bg-light border"></div>
                <br />
                สภานะอุปกรณ์
                <div className="p-2 bg-light border"></div>
                <br />
                แบตเตอรี่
                <div className="p-2 bg-light border"></div>
              </Popup>
            </Marker>
            
          )
        })
      }
      </MapContainer>


      <div className="bottom-right">
        
        <div className="onoff">
          <img src="/images/gray.png" />
          <p>  จุดติดตั้งมาตรวัดน้ำ</p>
        </div> 
        <div className="onoff">
          <img src="/images/blue.png" />
          <p>  จุดติดตั้งมาตรวัดน้ำอัจฉริยะ</p>
        </div> 
        <div className="onoff">
          <img src="/images/blueoffline.png" />
          <p>  มีความผิดปกติ ณ จุดติดตั้ง</p>
        </div> 
        <div className="onoff">
          <img src="/images/grayonline.png" />
          <img src="/images/blueonline.png" />
          <p>  จุดติดตั้งออนไลน์</p>
        </div> 
        <div className="onoff">
          <img src="/images/gray.png" />
          <img src="/images/blue.png" />
          <p>  จุดติดตั้งออฟไลน์</p>
        </div> 
      </div>
    </div>
  );
}

export default home;
