import './index.css';
import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.min.css';
import Slider  from './slider';
import Scarce from '../../images/Scarce.png';
import raise from '../../images/raise.png';
import Moderate from '../../images/Moderate.png';
import Saturated from '../../images/Saturated.png';
import downArrow from '../../images/down-arrow.png';
import down from '../../images/down.png';
import parallel from '../../images/parallel.png';
import { getRecently7days, getTredingTopics, tableData } from '../../utils';
import classNames from 'classnames';
const days = getRecently7days();
const verticals = ['All', 'News', 'Finace', 'Sports', 'Entertainment', 'Others'];

const columns = [
  { title: <div >Topic</div>, dataIndex: 'topic', key: 'topic'},
  { title: <div className='searchVolume'>Search volume <img src={downArrow} alt="down-arrow" /></div>, dataIndex: 'searchVolume', key: 'searchVolume' },
  { title: 'MSN content supply', dataIndex: 'msn', key: 'msn' }
];
const contentSupplyTemplate = (status) => {
    switch(status) {
        case 'Scarce': 
            return <img src={Scarce} alt="scarce" />
        case 'Moderate': 
            return <img src={Moderate} alt="scarce" />
        case 'Saturated': 
            return <img src={Saturated} alt="scarce" />
        default: 
            return null
    }
};
const searchVolumnTemplate = (status) => {
    switch(status) {
        case 'Up':
            return <img src={raise} alt="raise" />;
        case 'Down': 
            return <img src={down} alt="down" />;
        case 'New': 
            return <span className='new'>New</span>
        case 'None':
            return <img src={parallel} alt='none' />
        default: 
            return null;
    }
}

const TrendingTopic = () => {
    const [ dataActiveIndex, setDateActiveIndex ] = React.useState(0);
    const [ verticalActiveIndex, setVerticalActiveIndex ] = React.useState(0);
    const [ trendTopic, setTrendTopic] = React.useState([]);
    const dateClick = (index) => {
        setDateActiveIndex(index)
    } 
    const verticalClick = (index) => {
        setVerticalActiveIndex(index)
    }
    const openDoc = (link) => {
        window.open(link);
    }
    React.useEffect(() => {
        const trendTopic = tableData.map((item, index) => {
            return {
                key: index+1,
                topic: <div className={'number'+(index+1)}><span>#{index+1}</span>{item.Topic}</div>,
                searchVolume: <div className={'number1Volume'}>
                                <span className={'notNumber1'}>
                                    {Number(item.SearchVolumn.Score).toLocaleString()}
                                </span>
                                {searchVolumnTemplate(item.SearchVolumn.Signal)}
                                </div>,
                msn: <div className={item.MsnContentSupply}>{contentSupplyTemplate(item.MsnContentSupply)}{item.MsnContentSupply}</div>,
                description: <div className="sliderContainer">
                    <Slider selectedIndex={0} onClick={()=> {}}>
                    {item.Items.map((subContent, index) => {
                        return <div className="item" onClick={() => {openDoc(item.DocLink)}}>
                            <img src={subContent.ImgUrl} alt="imge" />
                            <div className='itemContent'>
                                <span>{subContent.Title}</span>
                            </div>
                            <div className='itemResource'>{subContent.Source}</div>
                        </div>
                    })}
                    </Slider>
                </div>,
            }
        })
        setTrendTopic(trendTopic);
        getTredingTopics({
            date: '2022-09-05',
            vertical: 'All'
        }).then((json)=> {
            console.log('JSON', json)
        })
    }, [])
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
              {days.map((item, index) => {
                return <span className={classNames({ 'selected': dataActiveIndex === index})} onClick={() => dateClick(index)}>
                            {days[index].displayDate}
                        </span>
              })}
            </div>
            <div className="Vertical">
              <span className='filterTitle'>Vertical:</span>
              {verticals.map((item, index) => {
                return <span className={classNames({ 'selected': verticalActiveIndex === index})} onClick={() => verticalClick(index)}>
                            {item}
                        </span>
              })}
            </div>
        </div>
        <div className="displayContent">
        {trendTopic && trendTopic.length>1 &&
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
              dataSource={trendTopic}
          />
        }
        </div>
      </div>
  );
}


export default TrendingTopic;