import FrameItem from './frameitem'
import Trends from './trends'
import BarChart from './barchart'
import PieChart from './piechart'

import { trends } from '../../data/mainfilters/trends'
import { barchart } from '../../data/mainfilters/barchart'
import { piechart } from '../../data/mainfilters/piechart'

import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const Chart = ({type, total, pinData}) => {
    const _states = [
        'Poronayskoye',
        'Anivskoye',
        'Dolinskoye',
        'Korsakovskoye',
        'Krasnogorskoye',
        'Makarovskoye',
        'Nevelskoye',
        'Noglikskoye',
        'Okhinskoye',
        'Yuzhno-Sakhalinskoye',
        'Aleksandrovskoye',
        'Smirnykhovskoye',
        'Tymovskoye',
        'Uglegorskoye',
        'Kholmskoye',
        'Yuzhno-Kurilskoye',
        'Kurilskoye'
    ]

    const allFrameItems = pinData.allPins.map((key, i) => {
        return <FrameItem title={key.fields.facilityName} comment={_states[Number(key.fields.states)-1]} number={Math.floor(Math.sqrt(Number(key.fields.states) + Number(key.fields.states) * 3 * i / 3))}/>
    })

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          <div style={{fontSize: '11px'}}>Function is still in development</div>
        </Tooltip>
      );

    const _chartType = {
        'trends': (<Trends data={ trends }/>),
        'barchart': (<BarChart data = { barchart }/>),
        'piechart': (<PieChart data = { piechart[0] } total = {{'totTableSectors': (total) ? total.totTableSectors : false}}/>)
    }

    
    return (
        <div className="charttable">

            <div className="charttable__left">

                <div className="charttable__itemtotal">
                    <b>100</b> total emitters displayed
                </div>
                <div className="charttable__frame">

                    <div className="charttable__frametop">
                        <div className="charttable__firstcol">
                            <div className="charttable__topcomponent">
                                <div className="charttable__topname">Facility name</div>
                                <div className="charttabel__topcomment">Location</div>
                            </div>
                            <div className="charttable__az">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="charttable__azicon"/>
                                <div class="charttable__azt">A-Z</div>
                            </div>
                        </div>
                        <div className="charttable__lastcol">
                            <img src="/mainfilters/2.svg" loading="lazy" alt="" className="charttable__azicon"/>
                            <div className="charttable__topcomponent">
                                <div className="charttable__topname">2021 emissions</div>
                                <div className="charttabel__topcomment">Metric Tons CO2e</div>
                            </div>
                        </div>
                    </div>

                    <div className="charttable__framestrict">
                        { allFrameItems }
                    </div>

                </div>
                <div className="charttable__framebottom">
                    <div className="charttable__framebleft">
                        <div className="charttable__shown"><b>10</b> of 100 shown</div>
                        <div className="charttable__shown">25</div>
                        <div className="charttable__shown">50</div>
                        <div className="charttable__shown">all on a page</div>
                    </div>
                    <div className="charttable__larrows">
                        <img src="/mainfilters/3.svg" className="charttable__larrleft"/>
                        <img src="/mainfilters/4.svg" className="charttable__larrright"/>
                    </div>
                </div>

            </div>

            <div className="charttable__right">
                <div class="charttable__righttop">
                    <div class="charttable__righttitle">2010-2021 — Direct GHG emissions by Facility in million metric tons of CO2e</div>
                    <div class="charttable__btnright">
                        <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                        >
                            <div class="charttable__btn">Focus on bottom sectors</div>
                        </OverlayTrigger>
                        <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                        >
                            <div class="charttable__btn">Export or print chart</div>
                        </OverlayTrigger>
                    </div>
                </div>
                <div class="charttable__chart">
                    
                    { _chartType[type] }

                </div>
            </div>

        </div>
    )
}

export default Chart