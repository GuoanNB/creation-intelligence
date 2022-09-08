import './index.css';
import 'antd/dist/antd.min.css';
import { Image } from 'antd';
import { Logo, NameCard, Shape, Start } from './assets';
import React from 'react';
import {Link} from "react-router-dom"
const Portal = () => {
  const portalList = React.useRef(null);
  const [logoLeft, setLogoLeft] = React.useState(0);


  React.useEffect(() => {
    // console.log("portalList", portalList.current.getBoundingClientRect())
    setLogoLeft(portalList.current.getBoundingClientRect().right - 264)

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
        <div className="PortalCellContainer" ref={portalList} style={{background: "#FAFAFA"}}>
          <Image preview={false} className="iteImg" src={require("../images/‌integelent.png")}/>
          <div className="iteContent">
              <div className="iteTitle">Creation intelligence</div>
              <div className="iteBigTitle">Creation Intelligence</div>
              <div className="iteText">Create high quality content easily with trending topics, headline generator and mobile video creation tool.</div>
              <div className="iteBtn"><Link to={"/Intelligence"}>Try now</Link></div>
          </div>

        </div>
        <div className="PortalCellContainer">
          <div className="bizLeft">
            <div className="bizLeftTitle">Flexible business models</div>
            <div className="bizLeftBigTitle">Grow Your Brand And Business</div>
            <div className="bizLeftText">Flexible offerings work closely with you on every angle in your content work</div>
          </div>
          <Image preview={false} className="iteImg" src={require("../images/wallet.png")}/>
          <div  className="bizCellContainer">
              <div className="bizCell">
                <div className="bizCellTitle">Ads</div>  
                <div className="bizCellSubTitle">Run MSFT Ads on website and gain revenue share</div>
                <ul className="bizCellList">
                  <li>N/A</li>
                  <li>N/A</li>
                  <li>N/A</li>
                </ul>
              </div>
              <div className="bizCell">
                <div className="bizCellTitle">Light</div>  
                <div className="bizCellSubTitle">Show contents on MSFT and gain referral traffic</div>
                <ul className="bizCellList">
                  <li>Search and feed</li>
                  <li>N/A</li>
                  <li>Referral traffic</li>
                  <li>Ads revenue share</li>
                </ul>
              </div>
              <div className="bizCell">
                <div className="bizCellTitle">Premium</div>  
                <div className="bizCellSubTitle">License contents to MSFT for distribution and monetization</div>
                <ul className="bizCellList">
                  <li>Unlimited traffic on search and feed</li>
                  <li>Brand homepage</li>
                  <li>Followers</li>
                  <li>Higher rate of Ads revenue share</li>
                  <li>Reader support</li>
                  <li>Subscription</li>
                </ul>
              </div>

          </div>

        </div> 

        <div className="PortalCellContainer">
          <Image preview={false} className="iteImg" src={require("../images/Incentives.png")} width={"50%"}/>
            <div className="iteContent">
              <div className="iteTitle">Incentives</div>
              <div className="iteBigTitle">Full Control of Your Content and Audience</div>
              <div className="iteText">Let your most passionate fans support your creative work via subscription </div>
              <div className="iteBtn"><Link to={"/Audience"}>Try now</Link></div>
            </div>        
        </div>
      </div>
      <div className="StaticLogo" style={{left: logoLeft}}>
        <Image preview={false} className="iteImg" src={require("../images/Rocket.png")}/>
        <Link to={"/web3"}><div className="staticLogoText">More benefits in <span style={{fontWeight: "600"}}>Web3</span></div>
        </Link>
      </div>
    </div>
  );
}


export default Portal;
