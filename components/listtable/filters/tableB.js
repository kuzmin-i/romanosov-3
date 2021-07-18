import ItemB from './itemB'

import {states} from '../../../data/mainfilters/states'

const categories = ['powerPlants', 'petroleum', 'refineries', 'chemicals', 'other', 'minerals', 'waste', 'metals', 'pulpPaper']

let updTableA = {}
/*  updTableA = [
    {'id': '1', 'powerplants': 0, ...}
]
*/
Object.keys(states).map((key, i) => {
    if(key != '0') {
        updTableA[states[key].name] = [
            Math.random() * 2.4,
            Math.random() * 2.4,
            Math.random() * 2.4,
            Math.random() * 2.4,
            Math.random() * 2.4,
            Math.random() * 2.4,
            Math.random() * 2.4,
            Math.random() * 2.4,
            Math.random() * 2.4,
        ]

        let _sum = 0
        updTableA[states[key].name].map((_key, i) => {
            _sum += _key
        })

        updTableA[states[key].name].push(_sum)        

    }
})

const TableB = ({pinData}) => {

    const AllItems = Object.keys(updTableA).map((km, i) => {
        return (<><ItemB name={km} data={updTableA[km]}/></>)
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