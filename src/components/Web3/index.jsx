import './index.css';
import React from 'react';
import { getTopHeadlines } from "../../utils"
import { Logo } from '../../containers/assets';
import liIcon from '../../images/li-icon.png';
import content1 from '../../images/content-1.png';
const testData = {
        OriginHeadline: "Works worth millions donated to gallery in show of support", Headline: "Machine Gun Kelly and Mod Sun's Stoner Comedy Was Inspired by a Real-Life Event", PVLift: "21.5%", OriginCTR: "1.5%", OptimaizedCTR:"9.7%", ImgUrl: "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
}

const testList = Array(20).fill(testData);


const Web3 = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [dataList, setList] = React.useState([]);



  React.useEffect(() => {
    const getHeadlines = async () => {
      const {data} = await getTopHeadlines();
      // console.log("res", data)
      setList(data)
      setIsLoading(false);
    }
    getHeadlines();
  }, [])

  return (
    <div className="TopCointainer"> 
      <header className="App-header">
        <div className="App-logo">
          {Logo()}
          Web3
        </div>
      </header>
      <div className="TopsCells">
          <div className="TopAreaContainer">
              <div className="TopTitle">Your Web3 journey begins here</div>
              <div className="TopSubTitle">Onboarding creators to Web3 world seamlessly & easily</div>
          </div>

          <div className="ListContainer">
            <div className='itemContainer'>
                <div className="title">
                    <p className="mainTitle">Easily access Web3 without crypto experience</p>
                    <p className="subTitle"><img src={ liIcon } alt='li-icon' /> Simple login and interact. No technical barriers</p>
                </div>
                <div className='web3ImgContainer'>
                    <img src={content1} alt='content-1' />
                </div>
            </div>

          </div>

      </div>

    </div>
  );
}


export default Web3;