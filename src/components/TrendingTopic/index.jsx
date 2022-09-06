import './index.css';
import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.min.css';
import Slider  from './slider';
import example from '../../images/example.png';
import Scarce from '../../images/Scarce.png';
import raise from '../../images/raise.png';
import Moderate from '../../images/Moderate.png'
import Saturated from '../../images/Saturated.png'
import downArrow from '../../images/down-arrow.png'
const columns = [
  { title: <div>Topic</div>, dataIndex: 'topic', key: 'topic' },
  { title: <div className='searchVolume'>Search volume <img src={downArrow} alt="down-arrow" /></div>, dataIndex: 'searchVolume', key: 'searchVolume' },
  { title: 'MSN content supply', dataIndex: 'msn', key: 'msn' }
];

const data = [
  {
    key: 1,
    topic: <div className='number1'><span>#1</span>Family day</div> ,
    searchVolume: <div className='number1Volume'><span>300,232</span><img src={raise} alt="raise" /></div>,
    msn: <div className='Scarce'><img src={Scarce} alt="scarce" /> Scarce</div>,
    description: <div className="sliderContainer">
                <Slider selectedIndex={0} onClick={()=> {}}>
                    <div className="item">
                        <img src={example} alt="" />
                        <div className='itemContent'>
                            <span>How a visual artist redefines sucess in graphic defign</span>
                        </div>
                        <div className='itemResource'>MSN</div>
                    </div>
                    <div className="item">
                    <img src={example} alt="" />
                        <div className='itemContent'>
                            <span>How a visual artist redefines sucess in graphic defign</span>
                        </div>
                        <div className='itemResource'>MSN</div>
                    </div>
                    <div className="item">
                    <img src={example} alt="" />
                        <div className='itemContent'>
                            <span>How a visual artist redefines sucess in graphic defign</span>
                        </div>
                        <div className='itemResource'>MSN</div>
                    </div>
                    <div className="item">
                    <img src={example} alt="" />
                        <div className='itemContent'>
                            <span>How a visual artist redefines sucess in graphic defign</span>
                        </div>
                        <div className='itemResource'>MSN</div>
                    </div>
                    <div className="item">
                    <img src={example} alt="" />
                        <div className='itemContent'>
                            <span>How a visual artist redefines sucess in graphic defign</span>
                        </div>
                        <div className='itemResource'>MSN</div>
                    </div>
                </Slider></div>,
  },
  {
    key: 2,
    topic: <div className='number2'><span>#2</span>Jim Green</div>,
    searchVolume: <div className='number1Volume'><span className='notNumber1'>422,333</span><span className='new'>New</span></div>,
    msn: <div className='Moderate'><img src={Moderate} alt="scarce" /> Moderate</div>,
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    topic: <div className='number3'><span>#3</span>Jim Green</div>,
    searchVolume: <div className='number1Volume'><span className='notNumber1'>422,333</span><span className='new'>New</span></div>,
    msn: <div className='Saturated'><img src={Saturated} alt="scarce" /> Saturated</div>,
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 4,
    topic: <div className='number4'><span>#4</span>Jim Green</div>,
    searchVolume: <div className='number1Volume'><span className='notNumber1'>422,333</span><span className='new'>New</span></div>,
    msn: <div className='Saturated'><img src={Saturated} alt="scarce" /> Saturated</div>,
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
]
const TrendingTopic = () => {
  // console.log("activeSection", activeSection)
  return (
      <div className="trendContainer">
        <div className="trendingTitle">
            Trending topic explorer
        </div>
        <div className='mainTitle'>
          Understand what content people are looking for
        </div>
        <div className="content">
          By inspecting and analyzing current focuses of users, we associate the reading demands with relevant hot topics and recommend suitable ones for creation to users. Daily update on 10+ categories of latest hottest industry clues. Suitable scenarios: hot topic finding, idea inspiration.
        </div>
        <div className='trafficBoost'>
            <span className='trafficNumber'>26%</span>
            <span className='trafficContent'>trending topic related contents get traffic boost after new trending occurs in recent 30 days</span>
        </div>
        <div className="filter">
            <div className="data">
              <span className='filterTitle'>Date:</span>
              <span className='selected'>Today</span>
              <span>Yesterday</span>
              <span>8/19</span>
              <span>8/18</span>
              <span>8/17</span>
              <span>8/16</span>
              <span>8/15</span>
            </div>
            <div className="Vertical">
              <span className='filterTitle'>Vertical:</span>
              <span className='selected'>All</span>
              <span>News</span>
              <span>Finace</span>
              <span>Sports</span>
              <span>Technology</span>
            </div>
        </div>
        <div className="displayContent">
          <Table
              pagination={false}
              columns={columns}
              expandable={{
                expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                rowExpandable: record => record.name !== 'Not Expandable',
                expandIcon: ({ expanded, onExpand, record }) =>
                expanded ? (
                <div className='expand' onClick={e => onExpand(record, e)} />
                ) : (
                <div className='fold' onClick={e => onExpand(record, e)} />
                )
              }}
              dataSource={data}
          />
        </div>
      </div>
  );
}


export default TrendingTopic;