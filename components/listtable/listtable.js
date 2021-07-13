import TableA from './filters/tableA'

const ListTable = () => {
    return (
        <div className="listtable">
            <div className="listtable__top">
                <div className="listtable__title">2020 — Total reported emissions by Facility in million metric tons of CO2e</div>
                <div className="listtable__selectors">
                    <div className="listtable__viewby">View by</div>
                    <div className="listtable__selector">
                        <div className="listtable__selbtn">Geography</div>
                        <div className="listtable__selbtn selected">Facility</div>
                    </div>
                    <div className="listtable__vhr"/>
                    <div className="listtable__selector">
                        <div className="listtable__selbtn selected">Selected year</div>
                        <div className="listtable__selbtn">Changes</div>
                    </div>
                </div>
            </div>

            <div className="listtable__frame">

                <TableA/>

            </div>
        </div>
    )
}

export default ListTable