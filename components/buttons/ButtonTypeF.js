import React, { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import { whatsthis } from '../../data/mainfilters/whatsthis'

//Button 'What's this?' 

const ButtonTypeF = ( {linktype, linkname, triggertype, placement} ) => {

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };


  const linkButton = React.forwardRef(({children, ...props}, _ref) => {
    const {className, ...otherP} = {...props}

    return(
      <div ref={_ref} {...otherP} class="mainfilters__link">{ children }</div>
    )
  })

  const TooltipContent = React.forwardRef(({children, className, ...props}, _ref) => {
    return (
    <div ref={_ref} {...props} className="mainfilters__popover">
      <div className="mainfilters__whatsthispop">
      {children}
      </div>
    </div>
    )
  })

  const renderTooltip = (props) => (
    <TooltipContent id="button-tooltip" {...props}>
      {whatsthis[linktype]}
    </TooltipContent>
  );

  return (
    <div>
      
      

      <OverlayTrigger
        placement={(placement) ? placement : "right"}
        delay={{ show: 150, hide: 300 }}
        trigger={triggertype}
        overlay={renderTooltip}
      >
        <div>
        <Button as={linkButton}>{linkname}</Button>
            
          </div>

        
      </OverlayTrigger>
    </div>
  );

    

}

export default ButtonTypeF

//{ (whatsthis) ? whatsthis[linktype] : '' }