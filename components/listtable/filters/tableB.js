import ItemB from './itemB'

import {states} from '../../../data/mainfilters/states'

const categories = ['powerPlants', 'petroleum', 'refineries', 'chemicals', 'other', 'minerals', 'waste', 'metals', 'pulpPaper']

const _statesList = {
    '17': 'Poronayskoye',
    '16': 'Anivskoye',
    '15': 'Dolinskoye',
    '14': 'Korsakovskoye',
    '13': 'Krasnogorskoye',
    '12': 'Makarovskoye',
    '11': 'Nevelskoye',
    '10': 'Noglikskoye',
    '9': 'Okhinskoye',
    '8': 'Yuzhno-Sakhalinskoye',
    '7': 'Aleksandrovskoye',
    '6': 'Smirnykhovskoye',
    '5': 'Tymovskoye',
    '4': 'Uglegorskoye',
    '3': 'Kholmskoye',
    '2': 'Yuzhno-Kurilskoye',
    '1': 'Kurilskoye'
}

const _sectorsList = {
    '1': 'Power Plants', 
    '2': 'Petroleum and Natural Gas Systems', '2a': 'Offshore Petroleum & Natural Gas Production', '2b': 'Onshore Petroleum & Natural Gas Production', '2c': 'Onshore Petroleum & Natural Gas Gathering & Boosting', '2d': 'Natural Gas Processing', '2e': 'Natural Gas Transmission/Compression', '2f': 'Onshore Natural Gas Transmission Pipelines', '2g': 'Natural Gas Local Distribution Companies', '2h': 'Underground Natural Gas Storage', '2i': 'Liquefied Natural Gas Storage', '2k': 'Liquefied Natural Gas Imp/Exp Equipment', '2l': 'Other Petroleum & Natural Gas Systems',
    '3': 'Refineries', 
    '4': 'Chemicals', '4a': 'Adipic Acid Production', '4b': 'Ammonia Manufacturing', '4c': 'Fluorinated GHG Production', '4d': 'HCFC-22 Prod./HFC-23 Dest.', '4e': 'Hydrogen Production', '4f': 'Nitric Acid Production', '4g': 'Petrochemical Production', '4h': 'Phosphoric Acid Production', '4i': 'Silicon Carbide Production', '4k': 'Titanium Dioxide Production', '4l': 'Other Chemicals',
    '5': 'Other', '5a': 'Underground Coal Mines', '5b': 'Food Processing', '5c': 'Ethanol Production', '5d': 'Universities', '5e': 'Manufacturing', '5f': 'Military', '5g': 'Use of Electical Equipment', '5h': 'Electronics Manufacturing', '5i': 'Electrical Equipment Manufacturers', '5k': 'Other',
    '6': 'Minerals', '6a': 'Cement Production', '6b': 'Glass Production', '6c': 'Lime Manufacturing', '6d': 'Soda Ash Manufacturing', '6e': 'Other Minerals',
    '7': 'Waste', '7a': 'Municipal Landfills', '7b': 'Industrial Landfills', '7c': 'Wastewater Treatment', '7d': 'Solid Waste Combustion',
    '8': 'Metals', '8a': 'Aluminum Production', '8b': 'Ferroalloy Production', '8c': 'Iron & Steel Production', '8d': 'Lead Production', '8e': 'Magnesium', '8f': 'Zinc Production', '8g': 'Other Metals',
    '9': 'Pulp and Paper', '9a': 'Pulp and Paper Manufacturers', '9b': 'Other Paper Producers'
  }

let updTableB = []

const TableB = ({pinData}) => {

    console.log(Object.keys(states))

    pinData.allPins.map((key, i) => {
        updTableB.push({'facilityName': key.fields.facilityName, 'data': [
            key.fields.filterStatus,
            'Yuzhno-Sakhalinsk',
            _statesList[key.fields.states],
            _sectorsList[key.fields.sectors],
            Math.floor(80 * Math.random())
        ]})
    })

    const AllItems = updTableB.map((km, i) => {
        return (<><ItemB name={updTableB[i].facilityName} data={updTableB[i].data}/></>)
    })


    return(
        <div className="listtable__framebox">
            <div className="listtable__frametop">
                        <div className="listtable__firstcol bb">
                            <div className="listtable__firsttitle">Facility</div>
                            <div className="listtable__vhra"/>
                        </div>
                        <div className="listtable__cols bb">
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">Status</div>
                            </div>
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">City</div>
                            </div>
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">Municipality</div>
                            </div>
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">Sectors</div>
                            </div>
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">Total Reported Emissions</div>
                            </div>
                        </div>
                    </div>
                    { AllItems }
                    
        </div>
    )
}

export default TableB