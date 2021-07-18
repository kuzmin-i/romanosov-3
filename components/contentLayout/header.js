import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const Header = () => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          <div style={{fontSize: '11px'}}>Secton is still in development</div>
        </Tooltip>
      );

    return (
        <div className="header">
                <div className="header__left">
                    <div className="header__logo"><img src="/logo.svg"/></div>
                    <div className="header__subtitle">Greenhouse Gas Emissions from Large Facilities</div>
                </div>
                <div className="header__right">
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >
                        <div className="header__link">Climate center website</div>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >
                        <div className="header__link">Share</div>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >
                        <div className="header__link">Help</div>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >
                        <div className="header__link">RU</div>
                    </OverlayTrigger>
                </div>
        </div>
    )
}

export default Header