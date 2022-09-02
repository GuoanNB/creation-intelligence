import './index.css';
import React from 'react';

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
    observerRef.current.observe(trendingTopicExplorerRef.current);
    observerRef.current.observe(headlineGeneratorRef.current);
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
  return (
    <div className="App">
      <header className="App-header">
      <div className={`${activeDom === "trendingTopicExplorer" ? "Section-title Active-ection-title" : "Section-title"}`}>Trending topic explorer</div>
      <div className={`${activeDom === "headlineGenerator" ? "Section-title Active-ection-title" : "Section-title"}`}>Headline generator</div>
      <div className={`${activeDom === "videoEditing" ? "Section-title Active-ection-title" : "Section-title"}`}>Video editing</div>
      </header>
      <div className="App-Container">
        <div id={"trendingTopicExplorer"} ref={trendingTopicExplorerRef} style={{width: "100%", height: "900px", background: "red"}}></div>
        <div id={"headlineGenerator"} ref={headlineGeneratorRef} style={{width: "100%", height: "900px", background: "green"}}></div>
        <div id={"videoEditing"} ref={videoEditingRef} style={{width: "100%", height: "900px", background: "blue"}}></div>

      </div>
    </div>
  );
}

export default Main;
