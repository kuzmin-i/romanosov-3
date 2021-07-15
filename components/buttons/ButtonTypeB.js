import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

import ButtonGroup from 'react-bootstrap/ButtonGroup'

import PHeader from './components/PHeader'
import DropdownRef from './components/DropdownRef'


const ButtonTypeB = ( chapters ) => {

    const _chapters = chapters.chapters

    const [label, setLabel] = useState(_chapters[0].name)

    const RecursiveMenu = (items) => {
        
        return (
            items.map(key => {
                const offset = (key.child) ? 'offset' : ''
                let _button;

                const CustomItem = React.forwardRef(({children, onClick}, ref) => {
                    return(
                        <div ref={ref} className={"mainfilters__cbsubitem " + offset}>
                            <input type="checkbox"/>
                            <div className="sectors__titles">{ key.name }</div>
                        </div>
                    )
                })

                const CustomToggle = React.forwardRef(({ children, onClick }, ref) => {
                    return (
                    <a
                      className="dropdown-item dropdown-toggle"
                      href=""
                      ref={ref}
                      onMouseEnter={(e) => onClick(e)}
                      onClick={(e) => {
                        e.preventDefault();
                        onClick(e);
                      }}
                    >
                      {children}
                    </a>
                  )
                    });

                if(key.list) {
                    _button =
                        <Dropdown
                            as={ButtonGroup}
                            key='right'
                            id={`dropdown-button-drop-right`}
                            drop='right'
                            variant="secondary"
                            title={`Drop right`}
                            style={{width: '100%'}}
                        >
                        <Dropdown.Toggle id="dropdown-basic" as = {CustomToggle}>
                            { key.name }
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                RecursiveMenu(key.list)
                            }
                        </Dropdown.Menu>
                        </Dropdown>
                } else {
                    _button = (
                        <Dropdown.Item as={CustomItem}>
                            {key.name}
                        </Dropdown.Item>
                    )
                }

                return _button

            })
        )
    }

    const DropdownRef = React.forwardRef(({children, ...props}, ref) => {
        let {className, ...other} = {...props}
        return (
            <div className="mainfilters__popover" {...other} ref={ref}>
                {children}
            </div>
        )
    })


    return (
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" bsPrefix="mainfilters__input--list">
            {label}
        </Dropdown.Toggle>

        <Dropdown.Menu as = { DropdownRef }>
            <Dropdown.Header as={ PHeader }>Greenhouse Gases</Dropdown.Header>
            { RecursiveMenu(_chapters) }
        </Dropdown.Menu>
        </Dropdown>
    )

    

}

export default ButtonTypeB