import React, { PureComponent } from "react";

export default class MapTooltip extends PureComponent {
  render() {
    const { info } = this.props;
    const displayName = `${info.fields.id}`;

    return (
      <div>
        <div>
          {displayName}<br>
          </br>
          {info.fields.state}
        </div>
      </div>
    );
  }
}


