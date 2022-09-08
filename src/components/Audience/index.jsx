import React from "react";
import TabBar from "../TabBar";
import { newsLetterList, discordList } from "../../utils";
const renderContent = (tabIndex) => {
    const list = tabIndex === 0 ? newsLetterList : discordList
    return (
        <div className="audience-content">
            {list.map((item,index) => {
                return (
                    <div key={item.title} className="audience-item">
                        <div>
                            <div>{item.title}</div>
                            <div>{item.subTitle}</div>
                            {item.description.map(val => {
                                return <div key={val}>
                                    <img src={"../../images/polygon.png"} alt="" />
                                </div>
                            })}
                        </div>
                        <img className="audience-img" src={require(`../../images/audience${index}.png`)} alt="" />
                    </div>
                )
            })}
        </div>
    )
        
}
const Audience = () => {
    const [tabIndex, setTabIndex] = React.useState(0)
    return (
        <div className="audience-container">
            <TabBar type={1} tabIndex={tabIndex} onChange={index => setTabIndex(index)} />
            {renderContent(tabIndex)}
        </div>
    )
}

export default Audience