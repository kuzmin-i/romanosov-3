import React from 'react'

const PHeader = React.forwardRef(({children}, ref) => {
    return (
      <div className="mainfilters__pheader" ref={ ref }>
        <b className="mainfilters__exp-a">
            { children }
        </b>
      </div>
    )
  })

  export default PHeader