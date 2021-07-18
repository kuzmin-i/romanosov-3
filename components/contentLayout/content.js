import FilterComponent from './filterComponent'
import Header from './header'

import React, {useState} from 'react'

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

const Content = ({pinData}) => {

    /* Map Total Table */
    const allPins = pinData.allPins

    let totTableSectors = {
        'powerPlants': [0, 0],
        'petroleum': [0, 0],
        'refineries': [0, 0],
        'chemicals': [0, 0],
        'other': [0, 0],
        'minerals': [0, 0],
        'waste': [0, 0],
        'metals': [0, 0],
        'pulpPaper': [0, 0]
      }

    let totTotal = {'total': [0, 0]}

    allPins.map((pin, e) => {
        Object.keys( totTableSectors ).map((kj, i) => {
            if(pin.fields[kj] > 0) {
                totTableSectors[kj][0] += pin.fields[kj]
                totTotal.total[0] += pin.fields[kj]
                totTableSectors[kj][1] += 1
                totTotal.total[1] += 1
            }
        }
        )
    })


    const totalone = Object.keys( totTableSectors ).map((kj, i) => {
        return (
            <div className="maintable__content">{totTableSectors[kj][0].toFixed(1)}</div>
        )
    })

    const totaltwo = Object.keys( totTableSectors ).map((kj, i) => {
        return (
            <div className="maintable__content">{totTableSectors[kj][1].toFixed(0)}</div>
        )
    })
    /* end Map Total Table */

    const _screen = [
        {'name': 'map', 'block': (<MapBlock pinData={ pinData }/>)},
        {'name': 'list', 'block': (<ListTable pinData = { pinData }/>)},
        {'name': 'trends', 'block': (<Chart type="trends"/>)},
        {'name': 'barchart', 'block': (<Chart type="barchart"/>)},
        {'name': 'piechart', 'block': (<Chart type="piechart"/>)}
    ]

    const ShowScreen = ({screen, allFiltersStates}) => {

        const __screen = [
            {'name': 'map', 'block': (<MapBlock allFiltersStates={ {...allFiltersStates} } pinData={ pinData }/>)},
            {'name': 'list', 'block': (<ListTable pinData = { pinData }/>)},
            {'name': 'trends', 'block': (<Chart type="trends" pinData = { pinData }/>)},
            {'name': 'barchart', 'block': (<Chart type="barchart" pinData = { pinData }/>)},
            {'name': 'piechart', 'block': (<Chart type="piechart" pinData = { pinData } total={{ 'totTableSectors': (totTableSectors) ? totTableSectors : false }}/>)}
        ]

        return __screen[screen].block
    }

    const [scrNumber, setScrNumber] = useState(0)

    const _filterCase = {
        'dataYear': '0',
        'facilityType': '1',
        'searchParams': {
            'name': true,
            'city': true,
            'municipality': true,
            'zip': true,
            'fid': true
        },
        'states': '0',
        'emissions': '0',
        'greenhouseGases': '0',
        'range': [-20000, 23000000],
        'filterStatus': '0',
        'sectors': '0'

    }

    /* DATAYEAR DATA START */
        const DYDefaultData = {
            '0': true, '2010': true, '2011': true, '2012': true, '2013': true, '2014': true, '2015': true, '2016': true, '2017': true, '2018': true, '2019': true, '2020': true, '2021': true
        }

        const [DYData, setDYData] = useState(DYDefaultData)

        const addDYItems = (id) => {
            let {...updDYData} = {...DYData}

            Object.keys( DYData ).map((km, i) => {
            if(id == '0') {
                updDYData[km] = true
            } else {
                updDYData[km] = (id==km) ? true : false 
                updDYData[km] = (updDYData['0'] == true) ? true : updDYData[km]
            }
            })

            setDYData(updDYData)
        }

        const GYPropsData = {'addItems': (id) => addDYItems(id), 'data': DYData}
    /* DATAYEAR DATA END */
    /* FACILITY TYPE START */
        const FTDefaultData = {
            '0': true,
            '1': true, '1a': true, '1b': true, '1c': true, '1d': true, '1e': true, '1f': true, 
            '2': true, '2a': true, '2b': true, '2c': true, '2d': true, '2e': true, '2f': true, 
            '3': true, '3a': true, '3b': true, '3c': true,
            '4': true
        }

        const [FTData, setFTData] = useState(FTDefaultData)

        const addFTItems = (id) => {
            let {...updFTData} = {...FTData}

            Object.keys( FTData ).map((km, i) => {
                updFTData[km] = (id==km) ? true : false 
                updFTData[km] = (updFTData['0'] == true) ? true : updFTData[km]

                if(km.length > 1) {
                updFTData[km] = (updFTData[km.substr(0,1)] == true) ? true : updFTData[km]
                }
            })

            console.log(updFTData)
            setFTData(updFTData)
        }

        const FTPropsData = {'addItems': (id) => addFTItems(id), 'data': FTData}
    /* FACILITY TYPE END */
    /* STATES DATA START */
        const StatesDefaultData = {
            '0': true, '1': true, '2': true, '3': true, '4': true, '5': true, '6': true, '7': true, '8': true, '9': true, '10': true, '11': true, '12': true, '13': true, '14': true, '15': true, '16': true
        }

        const [StatesData, setStatesData] = useState(StatesDefaultData)

        const addStatesItems = (id) => {
            let {...updStatesData} = {...StatesData}

            Object.keys( StatesData ).map((km, i) => {
            if(id == '0') {
                updStatesData[km] = true
            } else {
                updStatesData[km] = (id==km) ? true : false 
                updStatesData[km] = (updStatesData['0'] == true) ? true : updStatesData[km]
            }
            })
            console.log(updStatesData)

            setStatesData(updStatesData)
        }

        const StatesPropsData = {'addItems': (id) => addStatesItems(id), 'data': StatesData}
    /* STATES DATA END */
    /* EMISSIONS START */
    const EMDefaultData = {
        '0': true,
        '1': true, '1a': true, '1b': true, '1c': true, '1d': true,
        '2': true, '3': true, '4': true
    }

    const [EMData, setEMData] = useState(EMDefaultData)

    const addEMItems = (id) => {
        let {...updEMData} = {...EMData}

        Object.keys( EMData ).map((km, i) => {
            updEMData[km] = (id==km) ? true : false 
            updEMData[km] = (updEMData['0'] == true) ? true : updEMData[km]

            if(km.length > 1) {
            updEMData[km] = (updEMData[km.substr(0,1)] == true) ? true : updEMData[km]
            }
        })
        setEMData(updEMData)
    }

    const EMPropsData = {'addItems': (id) => addEMItems(id), 'data': EMData}
    /* EMISSIONS END */
    /* FILTERSTATUS START */
    const FSDefaultData = {
        '0': true, '1': true, '2': true, '3': true, '4': true
    }

    const [FSData, setFSData] = useState(FSDefaultData)

    const addFSItems = (id) => {
        let {...updFSData} = {...FSData}

        Object.keys( FSData ).map((km, i) => {
        if(id == '0') {
            updFSData[km] = true
        } else {
            updFSData[km] = (id==km) ? true : false 
            updFSData[km] = (updFSData['0'] == true) ? true : updFSData[km]
        }
        })

        setFSData(updFSData)

    }

    const FSPropsData = {'addItems': (id) => addFSItems(id), 'data': FSData}
    /* FILTERSTATUS END */
    /* SECTOR DATA START  */
    const SectorsDefaultData = {
        '1': true, 
        '2': true, '2a': true, '2b': true, '2c': true, '2d': true, '2e': true, '2f': true, '2g': true, '2h': true, '2i': true, '2k': true, '2l': true,
        '3': true, 
        '4': true, '4a': true, '4b': true, '4c': true, '4d': true, '4e': true, '4f': true, '4g': true, '4h': true, '4i': true, '4k': true, '4l': true,
        '5': true, '5a': true, '5b': true, '5c': true, '5d': true, '5e': true, '5f': true, '5g': true, '5h': true, '5i': true, '5k': true,
        '6': true, '6a': true, '6b': true, '6c': true, '6d': true, '6e': true,
        '7': true, '7a': true, '7b': true, '7c': true, '7d': true,
        '8': true, '8a': true, '8b': true, '8c': true, '8d': true, '8e': true, '8f': true, '8g': true,
        '9': true, '9a': true, '9b': true
      }
    
    const [selSectors, setSelSectors] = useState(SectorsDefaultData)

    const selectAll = () => {
        setSelSectors(SectorsDefaultData)
    }

    const clearAll = () => {
        let {...clrSelSectors} = {...selSectors}

        Object.keys( selSectors ).map((km, i) => {
            clrSelSectors[km] = false
        })

        setSelSectors(clrSelSectors) 
    }
  
    const addCategoryItems = ( id, type ) => {
        let {...updSelSectors} = {...selSectors}

        Object.keys( selSectors ).map((km, i) => {
        let filter = (type == 'main') ? km.substr(0, 1) : km 
        updSelSectors[km] = (filter == id) ? !updSelSectors[km] : updSelSectors[km]
        })

        setSelSectors(updSelSectors)
    }

    const SectorPropsData = { 'selectAll': selectAll, 'clearAll': clearAll, 'addCategoryItems': (id, type) => addCategoryItems(id, type), 'data': selSectors }
    
    /* SECTOR DATA END  */
    /* GREENHOUSE DATA START  */
    const _greenhouseGasesData = {
        '1': true, '2': true, '3': true, '4': true, '4a': true, '4b': true, '4c': true, '4d': true, '4e': true, '4f': true, '4g': true, '4h': true
    }

    const [ghGasesData, setGhGasesData] = useState(_greenhouseGasesData)

    const addGhGasesItems = (id, type) => {
        let {...updGhGasesData} = {...ghGasesData}

        Object.keys( updGhGasesData ).map((km, i) => {
            let filter = (type == 'main') ? km.substr(0, 1) : km 
            updGhGasesData[km] = (filter == id) ? !updGhGasesData[km] : updGhGasesData[km]
            
        })

        
        setGhGasesData( updGhGasesData )
        
    }

    const GhGasesPropsData = { 'addGhGasesItems': (id, type) => addGhGasesItems(id, type), 'data': ghGasesData }

    /* GREENHOUSE DATA END  */

    const [filtersCase, setFilterCase] = useState(null)
    
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
                    <img src={"/mainfilters/" + name + ".svg" } loading="lazy" alt="" class="mainfilters__screenicon"/>
                </div>
            </OverlayTrigger>
        )
    }

    const ScrSelBlock = _screen.map((key, i) => {
        return ScrSelection(i, key.name)
    })


    
    

    return (
        <div className="content">
            <Header/>
            
            <div className="mainfilters">
                <div className="mainfilters__left">
                    <div className="mainfilters__floor">
                        <FilterComponent category="datayear" type="dropdownA" data={ dataYear } propsData={ GYPropsData } name="Data Year" listname="2020"/>
                        <FilterComponent category="facility" type="dropdownA" data={ facilityType } propsData={ FTPropsData } name="Facility Type" linkname="What's this?" triggertype="hover" linktype="emitters" listname="Choose Fuel Type"/>
                        <FilterComponent category="search"  type="inputText" linkname="Search Options" listname="Find a facility or location" triggertype="click" linktype="search"/>
                    </div>
                    <div className="mainfilters__floor">
                        <div className="mainfilters__leftoverflow">
                        <FilterComponent category="facility" type="dropdownA" data={ states } propsData={ StatesPropsData } name="Browse to a municipality" listname="Choose municipality"/>
                        <FilterComponent category="facility" type="dropdownA" data={ emissions } propsData={ EMPropsData } name="Emissions by Fuel type" linkname="What's this?" triggertype="hover" linktype="emissions" listname="What's this?"/>
                        <FilterComponent category="small" type="dropdownB" data={ greenhouseGases.list } propsData = { GhGasesPropsData } name="Filter By" listname="Greenhouse Gas"/>
                        <FilterComponent category="small" type="dropdownC" listname="Emission Range"/>
                        <FilterComponent category="facility" type="dropdownG" data={ filterStatus } propsData={ FSPropsData } name="Filter By Status" linkname="What's this?" triggertype="hover" linktype="facilities" listname="All Facilities"/>
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
                        {/*<div class="mainfilters__clearbutton export">Export Data</div>*/}
                    </div>

                    <div className="mainfilters__floor rght">
                        <div class="mainfilters__applybutton" onClick={() => window.open('/print/flight.xls', '_blank')}>Export Data</div>
                        <div class="mainfilters__clearbutton" onClick={() => location.reload()}>Clear Filter</div>
                    </div>
                </div>

            </div>

            <MapTable sector={ SectorPropsData } total = {{'one': totalone, 'two': totaltwo, 'totTotal': totTotal}}/>
            
            { ShowScreen({
                'screen': scrNumber, 
                'allFiltersStates': {'filterStatus': FSData, 'DataYear': DYData, 'facilityType': FTData, 'states': StatesData, 'emissions': EMData, 'greenhouseGases': ghGasesData, 'sectors': selSectors}
                }) }

            <div className="maintable__subcomment">
                
            </div>
        </div>
    )
}

export default Content
