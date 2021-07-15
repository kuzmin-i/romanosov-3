import React, { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button'

import Overlay from 'react-bootstrap/Overlay'

import DoubleRangeSlider from './ButtonTypeE'

import PHeader from './components/PHeader'


const ButtonTypeC = ( chapters ) => {

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };


  return (
    <div ref={ref}>
      <Button onClick={handleClick} bsPrefix="mainfilters__input--list">Emission range</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom-start"
        container={ref.current}
        containerPadding={20}
      >
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            className="mainfilters__popover"
            style={{
              ...props.style,
            }}
          >
            <PHeader>Facility Emissions Range (MT CO2e)</PHeader>
            <DoubleRangeSlider/>
          </div>

        )}
      </Overlay>
    </div>
  );

    

}

export default ButtonTypeC