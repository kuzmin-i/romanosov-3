import React, {useEffect, useState, useRef, useCallback} from 'react'


import ReactMapGL, { Marker, Popup, Source, Layer } from 'react-map-gl'

import {layerStyles} from './layerStyles'

import MapPin from './mappin'
import MapTooltip from './maptooltip'

import statesBorders from "./statesBorders.json"

import MapEditPanel from './mapeditpanel'





const MAPBOX_TOKEN = "pk.eyJ1IjoibWFya2thYmllcnNraSIsImEiOiJja2lpa3N2c3QwaXVrMnltbHVzcXZ3dDU2In0.t_Lcd-0hPAJSk75HCJFw0g"



const MapBlock = ({ pinData }) => {

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
        longitude={city.fields.lng}
        latitude={city.fields.lat}
      >
        <MapPin size={20} facilityType={city.fields.facilityType} filterStatus={city.fields.filterStatus} onClick={() => setPopupInfo(city)} />
      </Marker>
    );
  };

  const _renderPopup =() => {

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.fields.lng}
          latitude={popupInfo.fields.lat}
          closeOnClick={false}
          onClose={() => setPopupInfo(null)}
        >
          <MapTooltip info={popupInfo} />
        </Popup>
      )
    );
  }

  /*const [EditPanel, setEditPanel] = useState(null)

  const EditBlock = React.forwardRef(({children, ...props}, ref) => {
    const {className, ...other} = {...props}
    return (
    <div {...other} ref={ref}>
      {children}
    </div>)
  })
  */

  /*const _renderEditPanel = () => {
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
  */

  /* All pins */

  const [sumPins, setSumPins] = useState([...pinData.allPins])

  const addNewMarker = (e, mid) => {
    let newMarker = {
      "fields": {
        "city": "Emission 8",
        "population": "Natural Gas Compression: 8,175,133",
        "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/8/85/2008-06-10_3000x1000_chicago_skyline.jpg/240px-2008-06-10_3000x1000_chicago_skyline.jpg",
        "state": "Natural Gas Compression: 8,175,133",
        "lat": e.lngLat[1],
        "lng": e.lngLat[0]
      }
    }

    const randomRange = (min, max) => {
      return Math.floor(min + Math.random() * (max-min))
    }

    const randomItem = (list) => {
      return list[Math.floor(Math.random() * list.length)]
    }

    const dataYearMin = randomRange(2010, 2014)
    const dataYearMax = randomRange(dataYearMin, 2022)

    const _FTData = [
      '1a', '1b', '1c', '1d', '1e', '1f', 
      '2a', '2b', '2c', '2d', '2e', '2f', 
      '3a', '3b', '3c',
      '4'
    ]

    const _EMData = [
      '1a', '1b', '1c', '1d',
      '2', '3', '4'
    ]

    const _greenhouseGasesData = [
      '1', '2', '3', '4a', '4b', '4c', '4d', '4e', '4f', '4g', '4h'
    ]

    const _SectorsData = [
      '1', 
      '2a', '2b', '2c', '2d', '2e', '2f', '2g', '2h', '2i', '2k', '2l',
      '3', 
      '4a', '4b', '4c', '4d', '4e', '4f', '4g', '4h', '4i', '4k', '4l',
      '5a', '5b', '5c', '5d', '5e', '5f', '5g', '5h', '5i', '5k',
      '6a', '6b', '6c', '6d', '6e',
      '7a', '7b', '7c', '7d',
      '8a', '8b', '8c', '8d', '8e', '8f', '8g',
      '9a', '9b'
    ]

    const FTData = randomItem([..._FTData])
    const EMData = randomItem([..._EMData])
    const GSData = randomItem([..._greenhouseGasesData])
    const SectorsData = randomItem([..._SectorsData])

    const filterStatus = randomRange(1, 5)
    const states = randomRange(1, 17)

    const rangeMin = randomRange(-20000, 7640000)
    const rangeMax = randomRange(rangeMin, 23000000)

    const zipcode = randomRange(693000, 693005)

    /* Generative name of facility */
    const _ao = [
      'OOO', 'OAO', 'DO OOO', 'MUP', 'OAU', 'SP OOO', ''
    ]

    const _region = [
      'Southern forest', 'Central', 'Amber', 'Sakhalin', '', 'Kuril', 'Krasnogorskiy', 'Korsakov', 'Dolinsky', '', 'Makarovles', 'Poronaisky', 'Ribolovetsky', '', 'Stroi', 'Ekarma', ' Agricultural'
    ]

    const _ftype = [
      'Artel', 'Meat-packing Plant', '', 'Factory', 'Collective Farm', 'Garment Factory', 'Fur Farm', 'Oil Production', '', 'Forestry', 'Household', 'Bakery', 'Dairy'
    ]

    const _fname = [
      '', '"Pilenga"', '"Sakura"', '"Kolos"', '"Alekso"', '"Victoria"', '', '"Vostok_DSM"', '"Dagi"', '"Gefest Group"', '', '"Delta"', '"Inma"', '"Irida"', '', '"Legion"', '"Mirage"', '"Moneron"', '', '"Neptun"', '"Nevod"'
    ]

    const facilityName = randomItem([..._ao]) + ' "' + randomItem([..._ftype]) + ' ' + randomItem([..._fname]) + '"'
    /* End Generative name */

    const pinUpdData = {
      'lat': e.lngLat[1],
      'lng': e.lngLat[0],
      'dataYearMin': dataYearMin,
      'dataYearMax': dataYearMax,
      'facilityType': FTData,
      'states': (mid) ? mid.toString() : states.toString(),
      'emissions': EMData,
      'greenhouseGases': GSData,
      'rangeMin': rangeMin,
      'rangeMax': rangeMax,
      'filterStatus': filterStatus.toString(),
      'sectors': SectorsData,
      'ZIP': zipcode,
      'facilityName': facilityName
    }
    

    pinData.postPin(pinUpdData)

    /*setEditPanel(e)*/

    setSumPins([...sumPins, {'fields': {...pinUpdData}}])
    
    
  }



  const ShowAllPins = () => {
    return sumPins.map(_renderCityMarker)
  }

  const MapGLClick = useCallback(event => {
    const {
      features,
      srcEvent: {offsetX, offsetY}
    } = event;
    const hoveredFeature = features && features[0];

    addNewMarker(event, hoveredFeature.properties.mid)

  }, [])

  return (
    <div className="map">
        <ReactMapGL
            {...viewport}
            width="100%"
            height="100%"
            mapboxApiAccessToken={ MAPBOX_TOKEN }
            onViewportChange={nextViewport => setViewport(nextViewport)}
            onClick = { MapGLClick }
        >
          <Source type="geojson" data={statesBorders}>
            <Layer {...layerStyles} />
          </Source>
          {ShowAllPins()}
          {_renderPopup()}
        </ReactMapGL>
        
    </div>
  );

}

export default MapBlock