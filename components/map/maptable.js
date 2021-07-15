import ButtonTypeD from '../buttons/ButtonTypeD'

const MapTable = () => {
    const filterSectors = (<div class="mainfilters__input--list filter">Filter sectors and industries</div>)
    const _filterSectors = ButtonTypeD

    return (
        <div className="maintable">
            <div className="maintable__firstrow">

                <div className="maintable__firstcol">
                    <div className="maintable__name first">Sector</div>
                    <ButtonTypeD class="mainfilters__input--list filter"/>
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
                        <div class="mainfilters__link">What's this?</div>
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
                        <div className="maintable__content">1568</div>
                        <div className="maintable__content">1568</div>
                        <div className="maintable__content">1568</div>
                        <div className="maintable__content">1568</div>
                        <div className="maintable__content">1568</div>
                        <div className="maintable__content">1568</div>
                        <div className="maintable__content">1568</div>
                        <div className="maintable__content">1568</div>
                        <div className="maintable__content">1568</div>
                    </div>
                </div>

                <div className="maintable__lastcol">
                    <div class="maintable__content">1568</div>
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
                        <div className="maintable__content">380</div>
                        <div className="maintable__content">380</div>
                        <div className="maintable__content">380</div>
                        <div className="maintable__content">380</div>
                        <div className="maintable__content">380</div>
                        <div className="maintable__content">380</div>
                        <div className="maintable__content">380</div>
                        <div className="maintable__content">380</div>
                        <div className="maintable__content">380</div>
                    </div>
                </div>

                <div className="maintable__lastcol">
                    <div class="maintable__content">1568</div>
                </div>
            </div>
        </div>
    )
}

export default MapTable