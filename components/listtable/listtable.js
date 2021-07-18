import { useState } from 'react'
import TableA from './filters/tableA'
import TableB from './filters/tableB'

const ListTable = ({pinData}) => {

    const TableList = {
        'A': (<TableA pinData = {pinData}/>),
        'B': (<TableB pinData = {pinData}/>)
    }

    const [TableNum, setTableNum] = useState('A')

    const changeViewBy = (key) => {
        setTableNum(key)
    }

    return (
        <div className="listtable">
            <div className="listtable__top">
                <div className="listtable__title">2021 — Total reported emissions by Facility in million metric tons of CO2e</div>
                <div className="listtable__selectors">
                    <div className="listtable__viewby">View by</div>
                    <div className="listtable__selector">
                        <div className={(TableNum == 'A') ? "listtable__selbtn selected" : "listtable__selbtn"} onClick={ () => changeViewBy('A') }>Geography</div>
                        <div className={(TableNum == 'B') ? "listtable__selbtn selected" : "listtable__selbtn"} onClick={ () => changeViewBy('B') }>Facility</div>
                    </div>
                    <div className="listtable__vhr"/>
                    <div className="listtable__selector">
                        <div className="listtable__selbtn selected">Selected year</div>
                        <div className="listtable__selbtn">Changes</div>
                    </div>
                </div>
            </div>

            <div className="listtable__frame">

                { TableList[TableNum] }

            </div>
        </div>
    )
}

export default ListTable