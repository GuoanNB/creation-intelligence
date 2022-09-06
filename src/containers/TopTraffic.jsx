import './index.css';
import React from 'react';
import TopTitleCell from "../components/TopTitleCell";
import { Skeleton } from 'antd';

import { Logo } from './assets';
const testData = {
        oriTitle: "Works worth millions donated to gallery in show of support", recTitle: "Machine Gun Kelly and Mod Sun's Stoner Comedy Was Inspired by a Real-Life Event", PVLift: "21.5%", OriCTR: "1.5%", OptCTR:"9.7%", imageURL: "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
}

const testList = Array(20).fill(testData);


const TopTraffic = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <div className="TopCointainer"> 
      <header className="App-header">
        <div className="App-logo">
          {Logo()}
          Intelligence home
        </div>
      </header>
      <div className="TopsCells">
          <div className="TopAreaContainer">
              <div className="TopTitle">Top traffic headlines optimized in recent 4 weeks</div>
              <div className="TopSubTitle">The headlines automatically launches A/B testing to reach a best title, quickly finding the most click-worthy headline for your content to get more interaction instead of visitors leaving. See how much your contents are improved.</div>
          </div>

          <div className="ListContainer">
            <Skeleton loading={isLoading} active avatar round>
              {testList.map((item, idx) => {
                  return <TopTitleCell key={item.oriTitle + idx} {...item}/>
              })}
            </Skeleton>

          </div>

      </div>

    </div>
  );
}


export default TopTraffic;