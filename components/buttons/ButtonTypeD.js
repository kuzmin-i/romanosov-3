import React, { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button'

import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'

import PHeader from './components/PHeader'

import { sectors } from '../../data/mainfilters/sectors'


const ButtonTypeD = ( {sector} ) => {



  const [sectorsI, setSectorsI] = useState(sectors)



  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const sectorsToColumns = [
    [0, 2],
    [2, 4],
    [4, 6],
    [6, 9]
  ]


  const addListItem = (child) => {

    const sublist = () => {
      const __sublist = child.map((a) => {

        const l = (
        <div className='sectors__subitem' id={a.id} onClick = { () => sector.addCategoryItems( a.id, 'sub' ) }>
          <input onChange={ () => sector.addCategoryItems( a.id, 'sub' ) } type="checkbox" checked={(sector.data[a.id] == true) ? 'checked' : false }/>
          <div className="sectors__titles"> { a.name } </div>
        </div>
        )
        return l
      })

      return __sublist
    }

    

    if(child) {
      return (
        <div className = "sectors__sublist">
          { 
            sublist()
          }
        </div>
    )}
  }

  const sectorBlock = (name, itemType, child, color, id ) => {

    const item = (v) => { 
      const bColor = (color) ? {backgroundColor: color} : ''


      return (
      <div style={ bColor } className={ 'sectors__' + v } id={ id } onClick={ () => sector.addCategoryItems( id, 'main' ) }>
          <input type="checkbox" onChange={ () => sector.addCategoryItems( id, 'main' ) } checked={(sector.data[id] == true) ? 'checked' : false }/>
          <div className="sectors__titles"> { name } </div>
      </div>
    )
  }

    if(itemType === 'block') {
    return (
      <div className='sectors__block'>
        { item('mainlevel') }
        { addListItem(child) }
      </div>
    )
    } else if(itemType === 'subitem') {
      item(itemType)
    }
  }

  const scatterSectors = () => {

    const slicedColumns = sectorsToColumns.map((key, i) => {
      const sliced = sectors.list.slice(key[0], key[1])

      return(
        <div className = "sectors__column" id={ i }>
          {
            sliced.map((a) => {
              return(
                sectorBlock(a.name, 'block', a.child, a.color, a.id)
              )
            }
)
          }
        </div>
      )
    })

    return ( slicedColumns )
  }

  const _button = React.forwardRef(({children, onClick, type},ref) => {
    return (
      <div ref={ref} class={"sectors__buttons " + type} onClick = {onClick} aria-describedby="popover-contained">{ children }</div>
    )
  }) 

  return (
    <div className="filterBox" ref={ref}>
      <Button onClick={handleClick} bsPrefix="mainfilters__input--list" variant="filter" type="filter">Filter sectors and industries</Button>

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
            <PHeader>Sectors</PHeader>
            <div>
              <div className = 'sectors'>

                <div className = 'sectors__columns'>
                { scatterSectors() }
                </div>

                <div className = 'sectors__top'>
                  <Button className = 'sectors__buttons' type="selectsector" as = { _button } onClick = { () => sector.selectAll() }>Select All</Button>
                  <Button className = 'sectors__buttons' type="selectsector" as = { _button } onClick = { () => sector.clearAll() }>Deselect All</Button>
                </div>
              </div>
            </div>
          </div>
            )}
      </Overlay>
    </div>
  );

    

}

export default ButtonTypeD