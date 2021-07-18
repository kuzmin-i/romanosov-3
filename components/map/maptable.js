import ButtonTypeD from '../buttons/ButtonTypeD'
import ButtonTypeF from '../buttons/ButtonTypeF'

const MapTable = ({sector, total}) => {
    const filterSectors = (<div class="mainfilters__input--list filter">Filter sectors and industries</div>)
    const _filterSectors = ButtonTypeD

    /*const allPins = pinData.allPins

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
    */

    return (
        <div className="maintable">
            <div className="maintable__firstrow">

                <div className="maintable__firstcol">
                    <div className="maintable__name first">Sector</div>
                    <ButtonTypeD class="mainfilters__input--list filter" sector={sector}/>
                    <div class="maintable__vhr"/>
                </div>

                <div className="maintable__middlecontent">
                    <div className="maintable__middlecol">
                        <div className="maintable__name powerplants">Power plants</div>
                        <div className="maintable__name petroleum">Petroleum and natural gas systems</div>
                        <div className="maintable__name refineries">Refineries</div>
                        <div className="maintable__name chemicals">Chemicals</div>
                        <div className="maintable__name minerals">Minerals</div>
                        <div className="maintable__name waste">Waste</div>
                        <div className="maintable__name metals">Metals</div>
                        <div className="maintable__name pulppaper">Pulp and Paper</div>
                        <div className="maintable__name other">Other</div>
                    </div>
                </div>

                <div className="maintable__lastcol">
                    <div className="maintable__vhr"></div>
                    <div className="maintable__total">
                        <div class="maintable__name first">Total</div>
                        <div class="mainfilters__link">
                            
                        <ButtonTypeF triggertype="hover" linktype="total" placement="left" linkname="What's this?"/></div>
                    </div>
                </div>
                
            </div>

            <div className="maintable__row">
                <div className="maintable__firstcol">
                    <div className="maintable__content first">
                        2020 GHG Emissions
                        <div className="maintable__subcomment">Million Metric Tons CO2e</div>
                    </div>
                </div>

                <div class="maintable__middlecontent">
                    <div class="maintable__middlecol">
                        { total.one }
                    </div>
                </div>

                <div className="maintable__lastcol">
                    <div class="maintable__content">{ total.totTotal.total[0].toFixed(1) }</div>
                </div>
            </div>

            <div className="maintable__row">
                <div className="maintable__firstcol">
                    <div className="maintable__content first">
                        Number of Reporting Facilities
                    </div>
                </div>

                <div class="maintable__middlecontent">
                    <div class="maintable__middlecol">
                        { total.two }
                    </div>
                </div>

                <div className="maintable__lastcol">
                    <div class="maintable__content">{ total.totTotal.total[1].toFixed(0) }</div>
                </div>
            </div>
        </div>
    )
}

export default MapTable