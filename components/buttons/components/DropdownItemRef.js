import React from 'react'

const DropdownItemRef = React.forwardRef(({children, ...props}, ref) => {
    const {className, onClick, toogle, ...other} = { ...props }

    return (
        <a 
            className={(toogle) ? "mainfilters__dditem toogle" : "mainfilters__dditem"} 
            onMouseEnter={ (toogle) ? (e)=>onClick(e) : ()=>{} }
            onClick = { onClick }
            {...other} 
            ref={ref}
        >
            { children }
        </a>
    )
})

export default DropdownItemRef