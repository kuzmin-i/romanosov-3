import ButtonTypeA from '../buttons/ButtonTypeA'
import ButtonTypeB from '../buttons/ButtonTypeB'
import ButtonTypeC from '../buttons/ButtonTypeC'

import ButtonTypeF from '../buttons/ButtonTypeF'
import ButtonTypeG from '../buttons/ButtonTypeG'

const FilterComponent = ({category, name, type, linkname, linktype, listname, data, triggertype}) => {
    const _button = (<div class="mainfilters__input--list">{ listname }</div>)

    const dataFish = [
        {'name': 'All Emitters'},
            {'name': 'Point Sources', 'child': true},
            {'name': 'Onshore Oil & Gas Production', 'child': true},
            {'name': 'Onshore Oil & Gas Gathering & Boosting', 'child': true},
            {'name': 'Local Distribution Companies', 'child': true},
            {'name': 'Onshore Gas Transmission Pipelines', 'child': true},
            {'name': 'SF6 from Elect. Dist. Systems', 'child': true},
        {'name': 'Suppliers', 'list': [
                {'name': 'Coal-based Liquid Fuel Suppliers', 'list': [
                    {'name': 'Producers', 'child': true},
                    {'name': 'Local Distribution Companies', 'child': true}
                ]},
                {'name': 'Petroleum Product Suppliers'},
                {'name': 'Natural Gas and Natural Gas Liquids Suppliers'}
        ]},
        {'name': 'CO2 Capture, Supply and Underground Injection'},
        {'name': 'Geologic Sequestration of CO2 (RR)'}
        ]

    const _data = (data) ? data : dataFish
    
    let _input

    if(category == 'search') {
        _input = (<input type="text" className="mainfilters__input--text" placeholder={ listname }/>)
    } 
    else if(category == 'small') {
        if(type == 'dropdownB') {
            _input = (<ButtonTypeB chapters = { _data }/>)
        } else {
            _input = <ButtonTypeC/>
        }
    } else {
        if(type == 'dropdownG') {
            _input = (<ButtonTypeG chapters = { _data }/>)
        } else {
            _input = (<ButtonTypeA chapters = { _data }/>)
        }
    }

    return (
        <div className={ "mainfilters__component " + category }>
            <div className="mainfilters__titleblock">
                <div class="mainfilter__title">{ name }</div>
                {(linktype) ? <ButtonTypeF triggertype={ triggertype } linktype={ linktype } linkname={ linkname }/> : ""}
            </div>
        { _input }
            
        </div>
    )
}

export default FilterComponent