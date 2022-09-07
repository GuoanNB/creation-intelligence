import "./index.css"

import { Button, Input, Tooltip, message } from "antd";

import { Link } from "react-router-dom";
import React from "react";
import TabBar from "./TabBar";
import { arrowGreenSVG } from "../../Icons/svg";
import { getSuggestionTitle } from "../../utils/index";

const { TextArea } = Input;

const title = "Generate compelling headline for your article";
const suggestionTitle = "Headline suggestions"
const description = "The headline suggestion model is built on learning of massive high-quality contents, it analyzes the articles from creators and automatically suggests compelling titles which helps creators to improve article quality and its further performance. Usage scenarios: headline suggestion, creation assistant. "
const subTitleList = ["Enter message or use sample content", "MSN content URL"]
const sampleContentList = ["123", "456"]
let sampleContentIndex = 0;
let subTitle = subTitleList[0]

const HeadlineGenerator = () => {
    const [tabIndex, setTabIndex] = React.useState(0);
    const [words, setWords] = React.useState("");
    const [wordsNumber, setWordsNumber] = React.useState(0);
    const [url, setUrl] = React.useState("");
    const [resultBtnName, setResultBtnName] = React.useState("See results");
    const [customizeSuggestionList, setCustomizeSuggestionList] = React.useState(["test1fewafefewafewfewfawefweafewafewfhwehfe fawefhewf afewafwefwaefehwkfhek faewfhewhfkwehfewkfawe fafewafew awefewafewafewafewf afewf", "test2", "test3"])
    const [msnSuggestionList, setMsnSuggestionList] = React.useState(["test11 test1fewafefewafewfewfawefweafewafewfhwehfe test1fewafefewafewfewfawefweafewafewfhwehfe test1fewafefewafewfewfawefweafewafewfhwehfe", "test22", "test33"])

    React.useMemo(() => {
        const numberList = words.trim().split(/\s+/g)
        const number = numberList[0] === '' ? 0 : numberList.length
        setWordsNumber(number)
    }, [words])

    const handleTabChange = (index) => {
        setTabIndex(index)
        subTitle = subTitleList[index]
    }
    const onSampleContent= () => {
        setWords(sampleContentList[sampleContentIndex])
        sampleContentIndex = sampleContentIndex >= sampleContentList.length - 1 ? 0 : sampleContentIndex + 1
    }
    const onCustomizeConfirm = () => {
        if (wordsNumber <= 200) {
            message.error("At least 200 words are required")
        } else {
            getSuggestionTitle({
                content_type: "text",
                content: words
            })
        }
    }
    const onMSNConfirm = () => {
        if (!/msn\.com/.test(url)) {
            message.error("Only MSN article is supported for now.")
        } else {
            getSuggestionTitle({
                content_type: "link",
                content: url
            })
        }
    }
    const onCopy = (key) => {
        const content = document.getElementById(key).innerText
        navigator.clipboard.writeText(content)
    }
    const renderCustomizeContent = () => {
        return (
            <>
                <TextArea
                    id="text-area"
                    value={words}
                    placeholder="200 words minimal is required for better effects"
                    onChange={e => setWords(e.target.value)}
                />
                <div className="words-number">{wordsNumber}</div>
                <div className="btns">
                    <Button id="sample-btn" onClick={onSampleContent}>Sample content</Button>
                    <Button id="primary-btn" type="primary" onClick={onCustomizeConfirm}>{resultBtnName}</Button>
                </div>
            </>
        )
    }
    const renderMSNContent = () => {
        return (
            <>
                <Input
                    id="input"
                    value={url}
                    placeholder="Please enter here"
                    onChange={e => setUrl(e.target.value)}
                />
                <Button id="import-btn" type="primary" onClick={onMSNConfirm}>Import content</Button>
            </>
        )
    }
    const renderCustomizeSuggestion = () => {
        return (
            !!customizeSuggestionList.length &&
            <div className="suggestion customize-suggestion">
                <div className="suggestion-title normal-title normal-font">{suggestionTitle}</div>
                {customizeSuggestionList.map((val, index) => {
                    return <div key={val + index} className={`list-item${index === customizeSuggestionList.length - 1 ? "" : " border-bottom"}`}>
                        <span id={`customize-item${index}`} className="customize-title ellipsis-title">{val}</span>
                        <Tooltip title="copied!" trigger="click" placement="bottom">
                            <svg className="copy" width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => onCopy(`customize-item${index}`)}>
                                <path d="M4 0C2.89543 0 2 0.895431 2 2V12C2 13.1046 2.89543 14 4 14H10C11.1046 14 12 13.1046 12 12V2C12 0.89543 11.1046 0 10 0H4ZM3 2C3 1.44772 3.44772 1 4 1H10C10.5523 1 11 1.44772 11 2V12C11 12.5523 10.5523 13 10 13H4C3.44772 13 3 12.5523 3 12V2ZM0 4.00001C0 3.25973 0.402199 2.61339 1 2.26758V12.5C1 13.8807 2.11929 15 3.5 15H9.73244C9.38663 15.5978 8.74028 16 8 16H3.5C1.567 16 0 14.433 0 12.5V4.00001Z" fill="#717171"/>
                            </svg>
                        </Tooltip>
                    </div>
                })}
            </div>
        )
    }
    const renderMSNSuggestion = () => {
        return (
            !!msnSuggestionList.length &&
            <>
                <div className="suggestion-header border-bottom">
                    <div className="align-start">
                        <div className="original-headline normal-font">Original headline</div>
                        <div className="original-title normal-font">Global energy transition: three trillion for economy and climate</div>
                    </div>
                    <img src={require("../../images/headline.png")} alt="" />
                </div>
                <div className="suggestion msn-suggestion">
                    <div className="suggestion-title normal-title normal-font">{suggestionTitle}</div>
                    {msnSuggestionList.map((val, index) => {
                        return <div key={val + index} className={`list-item${index === customizeSuggestionList.length - 1 ? "" : " border-bottom"}`}>
                            <span id={`msn-item${index}`} className="msn-title ellipsis-title">{val}</span>
                            <div className="flex-container">
                                <div className="number-container">
                                    {arrowGreenSVG()}
                                    <span>19.3%</span>
                                </div>
                                <Tooltip title="copied!" trigger="click" placement="bottom">
                                    <svg className="copy" width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => onCopy(`msn-item${index}`)}>
                                        <path d="M4 0C2.89543 0 2 0.895431 2 2V12C2 13.1046 2.89543 14 4 14H10C11.1046 14 12 13.1046 12 12V2C12 0.89543 11.1046 0 10 0H4ZM3 2C3 1.44772 3.44772 1 4 1H10C10.5523 1 11 1.44772 11 2V12C11 12.5523 10.5523 13 10 13H4C3.44772 13 3 12.5523 3 12V2ZM0 4.00001C0 3.25973 0.402199 2.61339 1 2.26758V12.5C1 13.8807 2.11929 15 3.5 15H9.73244C9.38663 15.5978 8.74028 16 8 16H3.5C1.567 16 0 14.433 0 12.5V4.00001Z" fill="#717171"/>
                                    </svg>
                                </Tooltip>
                            </div>
                        </div>
                    })}
                </div>
            </>
        )
    }
    return (
        <>
            <div className="headline-title">Headline generator</div>
            <div className="title normal-font align-center">{title}​</div>
            <div className="description normal-font align-center">
                <span>{description}</span>
                {/* <a href="/tops" target="_blank">Headline optimization records</a> */}
                <Link to="/hackthon-demo/tops">Headline optimization records</Link>
            </div>
            <TabBar tabIndex={tabIndex} onChange={handleTabChange} />
            <div className="sub-title normal-title normal-font">{subTitle}</div>
            {tabIndex === 0 ? renderCustomizeContent() : renderMSNContent()}
            {tabIndex === 0 ? renderCustomizeSuggestion() : renderMSNSuggestion()}
        </>
    )
}

export default HeadlineGenerator