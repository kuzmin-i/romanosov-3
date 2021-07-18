import React, { PureComponent } from "react";

export default class MapTooltip extends PureComponent {
  render() {
    const { info } = this.props;
    const displayName = `${info.fields.id}`;

    return (
      <div>
        <div style={{
          padding: '10px',
          border: '1px solid black',
          boxShadow: '0px 4px 12px 3px rgb(0 0 0 / 15%)',
          borderRadius: '3px'
        }}>
          { info.fields.facilityName }<br/>
          ZIP: { info.fields.ZIP }
        </div>
      </div>
    );
  }
}


