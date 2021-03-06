const ItemA = ({name, data}) => {
    return (
        <div className="listtable__framerow">
                        <div className="listtable__firstcol">
                            <div className="listtable__rowtitle">{name}</div>
                        </div>
                        <div className="listtable__cols">
                            <div className="listtable__item">
                                <div className="listtable__rownumber">{data[0].toFixed(1)}</div>
                            </div>
                            <div className="listtable__item">
                                <div className="listtable__rownumber">{data[1].toFixed(1)}</div>
                            </div>
                            <div className="listtable__item">
                                <div className="listtable__rownumber">{data[2].toFixed(1)}</div>
                            </div>
                            <div className="listtable__item">
                                <div className="listtable__rownumber">{data[3].toFixed(1)}</div>
                            </div>
                            <div className="listtable__item">
                                <div className="listtable__rownumber">{data[4].toFixed(1)}</div>
                            </div>
                            <div className="listtable__item">
                                <div className="listtable__rownumber">{data[5].toFixed(1)}</div>
                            </div>
                            <div className="listtable__item">
                                <div className="listtable__rownumber">{data[6].toFixed(1)}</div>
                            </div>
                            <div className="listtable__item">
                                <div className="listtable__rownumber">{data[7].toFixed(1)}</div>
                            </div>
                            <div className="listtable__item">
                                <div className="listtable__rownumber">{data[8].toFixed(1)}</div>
                            </div>
                            <div className="listtable__item">
                                <div className="listtable__rownumber">{data[9].toFixed(1)}</div>
                            </div>
                        </div>
                    </div>
    )
}

export default ItemA