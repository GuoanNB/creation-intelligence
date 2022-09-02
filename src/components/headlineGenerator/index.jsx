import "./index.css"
import React from "react";
const TabBar = () => {
    return <div></div>
}
const HeadlineGenerator = () => {
    return (
        <>
            <span className="module-name font-normal align-center">Headline generator</span>
            <div className="title font-normal align-center">Generate compelling headline for your article​</div>
            <div className="description font-normal align-center">
                The headline suggestion model is built on learning of massive high-quality contents, it analyzes the articles from creators and automatically suggests compelling titles which helps creators to improve article quality and its further performance. Usage scenarios: headline suggestion, creation assistant. 
                <a href="#/" target="_blank">Headline optimization records</a>
            </div>
            <TabBar />
        </>
    )
}

export default HeadlineGenerator