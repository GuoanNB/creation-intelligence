import './index.css';
import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.min.css';

const columns = [
  { title: <div>Topic</div>, dataIndex: 'topic', key: 'topic' },
  { title: 'Search volume', dataIndex: 'searchVolume', key: 'searchVolume' },
  { title: 'MSN content supply', dataIndex: 'msn', key: 'msn' }
];

const data = [
  {
    key: 1,
    topic: <div>Family day</div> ,
    searchVolume: '300,232',
    msn: 'Scarce',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    topic: 'Jim Green',
    searchVolume: '422,333',
    msn: 'Moderate',
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
          <span>trending topic related contents get traffic boost after new trending occurs in recent 30 days</span>
        </div>
        <div className="filter">
            <div className="data">
              <span>Date:</span>
              <span>Today</span>
              <span>Yesterday</span>
              <span>8/19</span>
              <span>8/18</span>
              <span>8/17</span>
              <span>8/16</span>
              <span>8/15</span>
            </div>
            <div className="Vertical">
              <span>Vertical:</span>
              <span>All</span>
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
              }}
              dataSource={data}
          />
        </div>
      </div>
  );
}


export default TrendingTopic;