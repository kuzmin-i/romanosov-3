import FilterComponent from './filterComponent'
import Header from './header'

import {useState} from 'react'

import {dataYear} from '../../data/mainfilters/dataYear'
import {facilityType} from '../../data/mainfilters/facilityType'
import {states} from '../../data/mainfilters/states'
import {emissions} from '../../data/mainfilters/emissions'
import {greenhouseGases} from '../../data/mainfilters/greenhouseGases'
import {filterStatus} from '../../data/mainfilters/filterStatus'

import MapTable from '../map/maptable'
import MapBlock from '../map/mapblock'

import Chart from '../charttable/chart'
import ListTable from '../listtable/listtable'

import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const Content = (props) => {
    const _screen = [
        {'name': 'map', 'block': (<MapBlock/>)},
        {'name': 'list', 'block': (<ListTable/>)},
        {'name': 'trends', 'block': (<Chart type="trends"/>)},
        {'name': 'barchart', 'block': (<Chart type="barchart"/>)},
        {'name': 'piechart', 'block': (<Chart type="piechart"/>)}
    ]

    const [scrNumber, setScrNumber] = useState(0)
    
    const ScrSelection = (i, name) => {
        return (
            <OverlayTrigger
                key='top'
                placement='top'
                overlay={
                    <Tooltip id={`tooltip-top`}>
                    {name}
                    </Tooltip>
                }
                >
                <div onClick = { () => setScrNumber(i) } className={(i == scrNumber) ? "mainfilters__screenbutton selected" : "mainfilters__screenbutton"}>
                    <img src={"/mainfilters/" + name + ".svg" }loading="lazy" alt="" class="mainfilters__screenicon"/>
                </div>
            </OverlayTrigger>
        )
    }

    const ScrSelBlock = _screen.map((key, i) => {
        return ScrSelection(i, key.name)
    })

    console.log(ScrSelBlock)

    
    

    return (
        <div className="content">
            <Header/>
            
            <div className="mainfilters">
                <div className="mainfilters__left">
                    <div className="mainfilters__floor">
                        <FilterComponent category="datayear" type="dropdownA" data={ dataYear } name="Data Year" listname="2020"/>
                        <FilterComponent category="facility" type="dropdownA" data={ facilityType } name="Facility Type" linkname="What's this?" linktype="emitters" listname="Choose Fuel Type"/>
                        <FilterComponent category="search"  type="inputText" linkname="Search Options" listname="Find a facility or location" linktype="search"/>
                    </div>
                    <div className="mainfilters__floor">
                        <div className="mainfilters__leftoverflow">
                        <FilterComponent category="facility" type="dropdownA" data={ states } name="Browse to a municipality" listname="Choose municipality"/>
                        <FilterComponent category="facility" type="dropdownA" data={ emissions } name="Emissions by Fuel type" linkname="What's this?" linktype="emissions" listname="What's this?"/>
                        <FilterComponent category="small" type="dropdownB" data={ greenhouseGases.list } name="Filter By" listname="Greenhouse Gas"/>
                        <FilterComponent category="small" type="dropdownC" listname="Emission Range"/>
                        <FilterComponent category="facility" type="dropdownG" data={ filterStatus } name="Filter By Status" linkname="What's this?" linktype="facilities" listname="All Facilities"/>
                        </div>
                    </div>
                </div>

                <div className="mainfilters__right">
                    <div className="mainfilters__floor rght">
                        <div className="mainfilters__component dataview">
                            <div className="mainfilters__titleblock">
                                <div className="mainfilter__title">Data View</div>
                            </div>
                            <div className="mainfilters__screenselector">
                                {ScrSelBlock}
                            </div>
                        </div>
                    </div>

                    <div className="mainfilters__floor">
                        <div class="mainfilters__applybutton">Apply Search</div>
                        <div class="mainfilters__clearbutton">Clear Filter</div>
                    </div>
                </div>

            </div>

            <MapTable/>
            
            { _screen[scrNumber].block }

            <div className="maintable__subcomment">
                
            </div>
        </div>
    )
}

export default Content
