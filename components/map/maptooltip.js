import React, { PureComponent } from "react";

export default class MapTooltip extends PureComponent {
  render() {
    const { info } = this.props;
    const displayName = `${info.city}`;

    return (
      <div>
        <div>
          {displayName}<br>
          </br>
          {info.state}
        </div>
      </div>
    );
  }
}


