import React from 'react'
import "./Map.css"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { showDataOnMap } from './util';
 //import { Map as LeafletMap } from 'leaflet ';

function Map({countries, caseType, center, zoom}) {
    return (
        <div className="map">
            <MapContainer 
                center={center}
                zoom={zoom}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* draw circle on screen */}
                {showDataOnMap(countries, caseType)}
            </MapContainer>
        </div>
    )
}

export default Map
