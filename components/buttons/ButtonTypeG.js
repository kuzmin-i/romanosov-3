import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

import DropdownItemRef from './components/DropdownItemRef'
import DropdownRef from './components/DropdownRef'

//Filter By Status (+images)

const ButtonTypeG= ( chapters ) => {

    const _chapters = chapters.chapters

    const [label, setLabel] = useState(_chapters[0].name)
    const [manIcon, setManIcon] = useState(_chapters[0].id)

    const RecursiveMenu = (items) => {

        const setToogle = ({bc, fn}) => {
            setLabel(bc)
            setManIcon(fn)
        }
        
        return (
            items.map(key => {
                let _button;

                const ListItem = ({aid, aname}) => {
                    if(aid != 0) {
                        return (<><img className="mainfilters__manicon" src={'/mainfilters/man-'+aid+'.svg'}/>{aname}</>)
                    } else {
                        return (<><div style={{fontWeight: 700, paddingTop: '5px', paddingBottom: '5px'}}>{aname}</div></>)
                    }
                }

                _button = (<Dropdown.Item onClick = { () => setToogle({'bc': key.name, 'fn': key.id}) } href="#/action-1" as={ DropdownItemRef }>{ ListItem({'aid': key.id, 'aname': key.name}) }</Dropdown.Item>)

                return _button

            })
        )
    }

    const ListToogle = (({ amanicon, alabel }) => {
        if(amanicon != 0) {
            return (<><img className="mainfilters__manicon-mini" src={'/mainfilters/man-'+amanicon+'.svg'}/>{(alabel.length >= 24 ) ? alabel.substr(0, 24) + '...' : alabel }</>)
        } else {
            return (<>{(alabel.length >= 32 ) ? alabel.substr(0, 32) + '...' : alabel }</>)
        }
    })

    return (
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" bsPrefix="mainfilters__input--list">
            <ListToogle amanicon={ manIcon } alabel={ label }/>
        </Dropdown.Toggle>

        <Dropdown.Menu as = { DropdownRef }>
            { RecursiveMenu(_chapters) }
        </Dropdown.Menu>
        </Dropdown>
    )

    

}

export default ButtonTypeG