import "./index.css"
import React from "react";
import { Input, Button } from "antd";

const { TextArea } = Input;
const HeadlineGenerator = () => {
    const [tabIndex, setTabIndex] = React.useState(0);
    const [words, setWords] = React.useState("");
    const TabBar = ({ tabIndex }) => {
        return <div className="tab">
            <div className={`tab-button${tabIndex === 0 ? " active" : ""}`} onClick={() => setTabIndex(0)}>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.3966 1.67037C7.62215 1.32489 7.9649 1.10391 8.33726 1.02391L8.35938 0.999512L8.38333 1.01476C8.76788 0.944573 9.17984 1.02364 9.52446 1.2698L11.3831 2.59738C12.0448 3.07007 12.2094 3.98401 11.7541 4.65784L4.91429 14.7794C4.86617 14.8506 4.8005 14.9082 4.72362 14.9466L0.72362 16.9466C0.555412 17.0308 0.354238 17.0134 0.202963 16.9016C0.0516872 16.7899 -0.0241006 16.6027 0.00681667 16.4172L0.756817 11.9172C0.76818 11.8491 0.793557 11.784 0.831345 11.7261L7.3966 1.67037ZM10.0948 5.32715L7.41477 3.47172L1.72598 12.185L1.54635 13.2628L3.393 14.4939L4.15914 14.1109L10.0948 5.32715ZM2.36284 15.009L1.36607 14.3445L1.15463 15.6131L2.36284 15.009ZM5.97217 14.9995H10.4998C11.3283 14.9995 11.9998 14.3279 11.9998 13.4995C11.9998 12.6711 11.3283 11.9995 10.4998 11.9995H7.99818L5.97217 14.9995ZM8.67351 10.9995H12.4998C13.3283 10.9995 13.9998 10.3279 13.9998 9.49951C13.9998 8.67108 13.3283 7.99951 12.4998 7.99951H10.6995L8.67351 10.9995ZM11.3749 6.99951H14.4998C15.3283 6.99951 15.9998 6.32794 15.9998 5.49951C15.9998 4.67108 15.3283 3.99951 14.4998 3.99951H13.1772C13.1128 4.30847 12.9885 4.61014 12.8012 4.88744L11.3749 6.99951Z" fill="#1A1A1A"/>
                </svg>
                <span className="tab-name">Customized content</span>
            </div>
            <div className={`tab-button${tabIndex === 1 ? " active" : ""}`} onClick={() => setTabIndex(1)}>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 0C1.11929 0 0 1.11929 0 2.5V11.5C0 12.8807 1.11929 14 2.5 14H7.59971C7.43777 13.6832 7.30564 13.3486 7.20703 13H2.5C1.67157 13 1 12.3284 1 11.5V4.5H5.07143C5.48194 4.5 5.87452 4.33176 6.15763 4.03449L7.61907 2.5H13.5C14.3284 2.5 15 3.17157 15 4V6.59971C15.3578 6.78261 15.6929 7.00353 16 7.25716V4C16 2.61929 14.8807 1.5 13.5 1.5H7.66667L6.06667 0.3C5.80702 0.105267 5.49122 0 5.16667 0H2.5ZM1 2.5C1 1.67157 1.67157 1 2.5 1H5.16667C5.27485 1 5.38012 1.03509 5.46667 1.1L6.69446 2.02084L5.4335 3.34483C5.33913 3.44392 5.20827 3.5 5.07143 3.5H1V2.5ZM11.0102 11C11.0568 9.87174 11.2592 8.87686 11.5499 8.15016C11.7169 7.73261 11.9033 7.42826 12.0847 7.23648C12.265 7.04575 12.4055 7 12.4999 7C12.5942 7 12.7347 7.04575 12.9151 7.23648C13.0965 7.42826 13.2828 7.73261 13.4499 8.15016C13.7405 8.87686 13.9429 9.87174 13.9896 11H11.0102ZM10.6214 7.77877C10.6854 7.6189 10.7547 7.46542 10.8294 7.32024C9.31913 7.92438 8.21268 9.32339 8.02734 11H10.0094C10.0565 9.76642 10.2766 8.64088 10.6214 7.77877ZM14.3783 7.77877C14.3144 7.6189 14.2451 7.46542 14.1703 7.32024C15.6806 7.92438 16.7871 9.32339 16.9724 11H14.9904C14.9433 9.76642 14.7232 8.64088 14.3783 7.77877ZM14.9904 12H16.9724C16.7871 13.6766 15.6806 15.0756 14.1703 15.6798C14.2451 15.5346 14.3144 15.3811 14.3783 15.2212C14.7232 14.3591 14.9433 13.2336 14.9904 12ZM12.9151 15.7635C12.7347 15.9543 12.5942 16 12.4999 16C12.4055 16 12.265 15.9543 12.0847 15.7635C11.9033 15.5717 11.7169 15.2674 11.5499 14.8498C11.2592 14.1231 11.0568 13.1283 11.0102 12H13.9896C13.9429 13.1283 13.7405 14.1231 13.4499 14.8498C13.2828 15.2674 13.0965 15.5717 12.9151 15.7635ZM8.02734 12C8.21268 13.6766 9.31913 15.0756 10.8294 15.6798C10.7547 15.5346 10.6854 15.3811 10.6214 15.2212C10.2766 14.3591 10.0565 13.2336 10.0094 12H8.02734Z" fill="#1A1A1A"/>
                </svg>
                <span className="tab-name">MSN content</span>
            </div>
        </div>
    }
    const Btns = () => {
        return (
            <div className="btns">
                <Button className="btn">Sample content</Button>
                <Button className="btn right-btn" type="primary">See results</Button>
            </div>
        )
    }
    return (
        <>
            <span className="module-name font-normal align-center">Headline generator</span>
            <div className="title font-normal align-center">Generate compelling headline for your article​</div>
            <div className="description font-normal align-center">
                The headline suggestion model is built on learning of massive high-quality contents, it analyzes the articles from creators and automatically suggests compelling titles which helps creators to improve article quality and its further performance. Usage scenarios: headline suggestion, creation assistant. 
                <a href="#/" target="_blank">Headline optimization records</a>
            </div>
            <TabBar tabIndex={tabIndex} />
            <div className="sub-title font-normal">Enter message or use sample content</div>
            <TextArea
                className="text-area"
                value={words}
                onChange={e => setWords(e.target.value)}
                placeholder="200 words minimal is required for better effects"
                autoSize={{ minRows: 10, maxRows: 10 }}
            />
            <Btns></Btns>
        </>
    )
}

export default HeadlineGenerator