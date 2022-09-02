import './index.css';
import React from 'react';
import TrendingTopic from "../components/TrendingTopic";

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
const Main = () => {
  const trendingTopicExplorerRef = React.useRef(null);
  const headlineGeneratorRef = React.useRef(null);
  const videoEditingRef = React.useRef(null);

  const observerRef = React.useRef(null);

  const [activeSection, setActiveSection] = React.useState({});

  React.useEffect(() =>{
    observerRef.current = new IntersectionObserver(function(entries) {
      const tempRec = {};
      entries.forEach((entry) => {
        tempRec[entry.target.id] = entry.intersectionRatio;
      })
      setActiveSection((prevState) => {
        return {
          ...prevState, ...tempRec
        }

      });
    }, {threshold: [0, 0.25, 0.5, 0.75, 1]});
    observerRef.current.observe(headlineGeneratorRef.current);
    observerRef.current.observe(trendingTopicExplorerRef.current);
    observerRef.current.observe(videoEditingRef.current);
  }, []);

  const activeDom = React.useMemo(() => {
    const res = Object.entries(activeSection)
    if(!res?.length){
      return ""
    }
    res.sort((a, b) => {
      return b[1] - a[1]
    })
    return res[0][0]
    
  }, [activeSection])
  // console.log("activeSection", activeSection)
  return (
    <div className="App">
      <header className="App-header">
      <div className={`${activeDom === "headlineGenerator" ? "Section-title Active-ection-title" : "Section-title"}`}>Headline generator</div>
      <div className={`${activeDom === "trendingTopicExplorer" ? "Section-title Active-ection-title" : "Section-title"}`}>Trending topic explorer</div>
      <div className={`${activeDom === "videoEditing" ? "Section-title Active-ection-title" : "Section-title"}`}>Video editing</div>
      </header>
      <div className="App-Container">
        <div id={"headlineGenerator"} ref={headlineGeneratorRef} style={{width: "100%", height: "900px", background: "green"}}></div>
        <div id={"trendingTopicExplorer"} className="trendingTopicExplorer" ref={trendingTopicExplorerRef} style={{width: "100%", height: "900px"}}>
          <TrendingTopic />
        </div>
        
        <div id={"videoEditing"} ref={videoEditingRef} style={{width: "100%", height: "900px", background: "blue"}}></div>
      </div>
    </div>
  );
}


export default Main;