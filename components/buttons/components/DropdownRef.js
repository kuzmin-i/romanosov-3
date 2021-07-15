import React from 'react'

const DropdownRef = React.forwardRef(({children, ...props}, ref) => {
    let {className, ...other} = {...props}
    return (
        <div className="mainfilters__popover" {...other} ref={ref}>
            {children}
        </div>
    )
})

export default DropdownRef