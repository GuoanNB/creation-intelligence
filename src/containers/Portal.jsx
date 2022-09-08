import './index.css';
import 'antd/dist/antd.min.css';

import { Logo, NameCard, Shape, Start } from './assets';

import React from 'react';

const Portal = () => {
  const portalList = React.useRef(null);
  const [logoLeft, setLogoLeft] = React.useState(0);
  const [logoTop, setLogoTop] = React.useState(0)


  React.useEffect(() => {
    console.log("portalList", portalList.current.getBoundingClientRect())
    setLogoLeft(portalList.current.getBoundingClientRect().right - 264)
    setLogoTop(portalList.current.getBoundingClientRect().top + 545)

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          {Logo()}
          Intelligence home
        </div>
      </header>
      <div className="App-Container">
        <div className="PortalTopContainer" >
            <div className="PortalTopTitle">
                Every creator and creative need to be valued more
            </div>
            <div className="Page-top-sub-title" style={{width: "622px"}}>The Microsoft creator center amplify the footprint of your brand and derive new value of your content</div>
        </div>
        <div className="PortalCellContainer" ref={portalList}>a</div>
        <div className="PortalCellContainer">a</div>

        <div className="PortalCellContainer">a</div>


      </div>
      <div className="StaticLogo" style={{left: logoLeft, top: logoTop}}>Web3</div>

    </div>
  );
}


export default Portal;