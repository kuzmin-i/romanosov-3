import React, { PureComponent } from "react";

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const pinStyle = {
  cursor: "pointer",
  stroke: "none"
};

const FTDefaultData = {
  '1a': 'a', '1b': 'b', '1c': 'b', '1d': 'c', '1e': 'c', '1f': 'd', 
  '2a': 'e', '2b': 'e', '2c': 'e', '2d': 'e', '2e': 'e', '2f': 'e', 
  '3a': 'f', '3b': 'f', '3c': 'f',
  '4': 'g'
}


export default class MapPin extends PureComponent {
  render() {
    const { size = 20, onClick, filterStatus, facilityType } = this.props;
    

    const genId = filterStatus + FTDefaultData[facilityType] + '.svg'

    return (
      <img src={"/mapIcons/" + genId} style={{width: '24px', height: '25px', marginLeft: '-12px', marginTop: '-25px'}}/>
    );
  }
}
