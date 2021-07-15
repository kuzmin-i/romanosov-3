import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

import ButtonGroup from 'react-bootstrap/ButtonGroup'

import DropdownItemRef from './components/DropdownItemRef'
import DropdownRef from './components/DropdownRef'


const ButtonTypeA = ( chapters ) => {

    const _chapters = chapters.chapters

    const [label, setLabel] = useState(_chapters[0].name)

    const RecursiveMenu = (items) => {
        
        return (
            items.map(key => {
                const _name = (key.child) ? <div className="mainfilters__exp-a offset">{key.name}</div> : <b className="mainfilters__exp-a">{key.name}</b>
                
                let _button;


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
                        <Dropdown.Toggle id="dropdown-basic" as = { DropdownItemRef } toogle={true}>
                            { _name }
                        </Dropdown.Toggle>
                        
                        <Dropdown.Menu as={ DropdownRef }>
                            {
                                RecursiveMenu(key.list)
                            }
                        </Dropdown.Menu>
                        </Dropdown>
                } else {
                    _button = (<Dropdown.Item onClick = { () => setLabel(key.name) } href="#/action-1" as={ DropdownItemRef }>{_name}</Dropdown.Item>)
                }

                return _button

            })
        )
    }


    return (
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" bsPrefix="mainfilters__input--list">
            {(label.length >= 32 ) ? label.substr(0, 32) + '...' : label }
        </Dropdown.Toggle>

        <Dropdown.Menu as = { DropdownRef }>
            { RecursiveMenu(_chapters) }
        </Dropdown.Menu>
        </Dropdown>
    )

    

}

export default ButtonTypeA