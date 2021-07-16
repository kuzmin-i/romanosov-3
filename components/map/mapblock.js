import React, {useEffect, useState, useRef, useCallback} from 'react'


import ReactMapGL, { Marker, Popup } from 'react-map-gl'

import MapPin from './mappin'
import MapTooltip from './maptooltip'

import CITIES from "./data.json"

import MapEditPanel from './mapeditpanel'


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

  const [EditPanel, setEditPanel] = useState(null)

  const EditBlock = React.forwardRef(({children, ...props}, ref) => {
    const {className, ...other} = {...props}
    return (
    <div {...other} ref={ref}>
      {children}
    </div>)
  })

  const _renderEditPanel = () => {
    return (
      EditPanel && (
        <Popup
          ref={EditBlock}
          tipSize={5}
          anchor="top"
          longitude={EditPanel.lngLat[0]}
          latitude={EditPanel.lngLat[1]}
          closeOnClick={false}
          onClose={() => setEditPanel(null)}
        >
          <MapEditPanel/>
        </Popup>
      )
    )
  }


  const [sumPins, setSumPins] = useState([...CITIES])

  const addNewMarker = (e) => {
    console.log(e)
    let newMarker = {
      "city": "Emission 8",
      "population": "Natural Gas Compression: 8,175,133",
      "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/8/85/2008-06-10_3000x1000_chicago_skyline.jpg/240px-2008-06-10_3000x1000_chicago_skyline.jpg",
      "state": "Natural Gas Compression: 8,175,133",
      "latitude": e.lngLat[1],
      "longitude": e.lngLat[0]
    }

    setEditPanel(e)

    setSumPins([...sumPins, newMarker])
    
    
  }



  const ShowAllPins = () => {
    return sumPins.map(_renderCityMarker)
  }

  return (
    <div className="map">
        <ReactMapGL
            {...viewport}
            width="100%"
            height="100%"
            mapboxApiAccessToken={ MAPBOX_TOKEN }
            onViewportChange={nextViewport => setViewport(nextViewport)}
            onClick = { addNewMarker }
        >
          {ShowAllPins()}
          {_renderPopup()}
          {_renderEditPanel()}
        </ReactMapGL>
        
    </div>
  );

}

export default MapBlock