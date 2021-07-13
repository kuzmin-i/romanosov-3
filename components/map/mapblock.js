import React, {useEffect, useState, useRef, useCallback} from 'react'


import MapGL, { Marker, Popup } from 'react-map-gl';

import MapPin from './mappin'
import MapTooltip from './maptooltip'

import CITIES from "./data.json";


const INITIAL_VIEW_STATE = {
  longitude: -74.50,
  latitude: 40,
  zoom: 9
};

const MAPBOX_TOKEN = "pk.eyJ1IjoibWFya2thYmllcnNraSIsImEiOiJja2lpa3N2c3QwaXVrMnltbHVzcXZ3dDU2In0.t_Lcd-0hPAJSk75HCJFw0g"

const data = [
  {position: [-74.5, 40], size: 100}
];

const MapBlock = () => {

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 50.209,
    longitude: 143.387,
    zoom: 5.91
  });

  const [popupInfo, setPopupInfo] = useState(null)

  const _renderCityMarker = (city, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        longitude={city.longitude}
        latitude={city.latitude}
      >
        <MapPin size={20} onClick={() => setPopupInfo(city)} />
      </Marker>
    );
  };

  const _renderPopup =() => {

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => setPopupInfo(null)}
        >
          <MapTooltip info={popupInfo} />
        </Popup>
      )
    );
  }

  return (
    <div className="map">
        <MapGL
            {...viewport}
            mapboxApiAccessToken={ MAPBOX_TOKEN }
            onViewportChange={nextViewport => setViewport(nextViewport)}
        >
          {CITIES.map(_renderCityMarker)}
          {_renderPopup()}
        </MapGL>
        
    </div>
  );

}

export default MapBlock