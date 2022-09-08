import './index.css';
import 'antd/dist/antd.min.css';

import { Logo, NameCard, Shape, Start } from './assets';

import HeadlineGenerator from "../components/HeadlineGenerator";
import ImageSlice from "../components/ImageSlice";
import React from 'react';
import TrendingTopic from "../components/TrendingTopic";

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
        <div className="App-logo">
          {Logo()}
          Intelligence home
        </div>
      <div className={`${activeDom === "trendingTopicExplorer" ? "Section-title Active-section-title" : "Section-title"}`} onClick={() => {
        trendingTopicExplorerRef.current.scrollIntoView();
      }}>{ Start(activeDom === "trendingTopicExplorer")}Trending topic explorer</div>
      <div className={`${activeDom === "headlineGenerator" ? "Section-title Active-section-title" : "Section-title"}`} onClick={() => {
        headlineGeneratorRef.current.scrollIntoView();
      }}>{Shape(activeDom === "headlineGenerator")}Headline generator</div>

      <div className={`${activeDom === "videoEditing" ? "Section-title Active-section-title" : "Section-title"}`} onClick={() => {
        videoEditingRef.current.scrollIntoView();
      }}>{ NameCard( activeDom === "videoEditing")} Video editing</div>
      </header>
      <div className="App-Container">
        <div className="Page-top-area-container">
          <div className="Page-top-area-title">
          Intelligence empowers creators
          </div>
          <div className="Page-top-sub-title">Microsoft intelligence home helps users to create content and advertise.</div>
          <div className="Page-top-cubes-container">
            {/* <div  className="Page-top-cube-border"> */}
              <div className="Page-top-cube" onClick={() => {
                trendingTopicExplorerRef.current.scrollIntoView();
              }}>
              <div>{Start(false, 40)}</div>
              Trending topic explorer
              </div>
            {/* </div> */}

            {/* <div className="Page-top-cube-border"> */}
                <div className="Page-top-cube" onClick={() => {
                  headlineGeneratorRef.current.scrollIntoView();
                }}>
                  <div>{Shape(false, 40)}</div>
                  Headline generator
                </div>
            {/* </div> */}
            {/* <div  className="Page-top-cube-border"> */}
                <div className="Page-top-cube"  onClick={() => {
                  videoEditingRef.current.scrollIntoView();
                }}>
                <div>{NameCard(false, 40)}</div>
                Video editing
                </div>
            {/* </div> */}

          </div>
        </div>

        <div id={"trendingTopicExplorer"} className="section-container trendingTopicExplorer" ref={trendingTopicExplorerRef}>
          <TrendingTopic />
        </div>
        <div id="headlineGenerator" ref={headlineGeneratorRef} className="section-container">
          <HeadlineGenerator />
        </div>
        <div id={"videoEditing"} ref={videoEditingRef} className="section-container">
          <ImageSlice/>
        </div>
      </div>
    </div>
  );
}


export default Main;