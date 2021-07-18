import ItemA from './itemA'

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

const TableA = ({pinData}) => {

    const AllItems = Object.keys(updTableA).map((km, i) => {
        return (<><ItemA name={km} data={updTableA[km]}/></>)
    })

    console.log(updTableA)

    /*let {..._updTableA} = {...updTableA}

    pinData.allPins.map((key, id) => {
        
        categories.map((mk, i) => {
            _updTableA[key.fields.states][i] += (key.fields[categories[i]]) ? key.fields[categories[i]] : 0
        })
    })

    Object.keys(states).map((key, i) => {
        const 
        _updTableA[key].push()
    })
    */

    return(
        <div className="listtable__framebox">
            <div className="listtable__frametop">
                        <div className="listtable__firstcol">
                            <div className="listtable__firsttitle">Municipality</div>
                            <div className="listtable__vhra"/>
                        </div>
                        <div className="listtable__cols">
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">Power plants</div>
                            </div>
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">Petroleum and natural gas systems</div>
                            </div>
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">Refineries</div>
                            </div>
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">Chemicals</div>
                            </div>
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">Minerals</div>
                            </div>
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">Waste</div>
                            </div>
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">Metals</div>
                            </div>
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">Pulp and Paper</div>
                            </div>
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">Other</div>
                            </div>
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">Total</div>
                            </div>
                        </div>
                    </div>
                    { AllItems }
                    
        </div>
    )
}

export default TableA