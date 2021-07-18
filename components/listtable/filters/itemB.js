const ItemB = ({name, data}) => {
    return (
        <div className="listtable__framerow">
                        <div className="listtable__firstcol bb">
                            <div className="listtable__rowtitle">{name}</div>
                        </div>
                        <div className="listtable__cols bb">
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
                        </div>
                    </div>
    )
}

export default ItemB