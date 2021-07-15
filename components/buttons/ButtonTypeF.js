import React, { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button'

import Overlay from 'react-bootstrap/Overlay'

import { whatsthis } from '../../data/mainfilters/whatsthis'

//Button 'What's this?' 

const ButtonTypeF = ( {linktype, linkname} ) => {

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };


  const linkButton = React.forwardRef(({children, onClick}, _ref) => {
    return(
      <div ref={_ref} onClick={onClick}  onMouseEnter={onClick} class="mainfilters__link">{ children }</div>
    )
  })

  return (
    <div ref={ref}>
      <Button onClick={handleClick} as={ linkButton }>{linkname}</Button>
      

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
            { (whatsthis) ? whatsthis[linktype] : '' }
          </div>

        )}
      </Overlay>
    </div>
  );

    

}

export default ButtonTypeF