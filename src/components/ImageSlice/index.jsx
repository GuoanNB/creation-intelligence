import './index.css';
import React from 'react';
import ImageCell from "./ImageCell";
import { Image, Carousel } from 'antd';
const SliceInner = ({index, title, context}) => {
    return <div className="innerContentWrapper">
    <div className="contentIndex">
      {index}
    </div>
    <div className="contentTitle">
      {title}
    </div>
    <div className="contentText" >
      {context}
      
    </div>
    <div className="contentLink">
      See More →
    </div>
  </div>
}


const contentStyle = {
  height: "507px",
  width: "900px",
  textAlign: 'center',
  background: '#364d79',
};

const ImageSlice = () => {


  return (
    <div className="sectionWrapper">
        <div className="sectionTitle">
          Video Editing
        </div>
        <div className="sectionMainTitle">
          Empower video creators
        </div>
        <div className="sectionDesc">
        Provide video shooting, audio and video mixing, sticker effects, beautification filters and teleprompters, while supporting mobile, PC short video shooting, online conferences, webinars and other wide range of scenes, so that you stand out in video creation.
        </div>
        <div className="imgContainer">
          <ImageCell isReversed={false} cardTitle={"01"} cardText={"Cut & Editing"} coverContent={
            <SliceInner
            index={"01"}
            title={"Cut & Editing"}
            context={"Provide tens of thousands of explosive special effect stickers which are realistic, innovative and interesting"}
            />
          }/>
          <ImageCell isReversed={true} cardTitle={"02"} cardText={"Filters & Stickers"} coverContent={
            <SliceInner
            index={"02"}
            title={"Filters & Stickers"}
            context={""}
            />
          }/>
          <ImageCell isReversed={false} cardTitle={"03"} cardText={"Telepromoter"} coverContent={
            <SliceInner
            index={"03"}
            title={"Telepromoter"}
            context={""}
            />
          }/>
          <ImageCell isReversed={true} cardTitle={"04"} cardText={"Teams webinar"} coverContent={
            <SliceInner
            index={"04"}
            title={"Teams webinar"}
            context={"Record a webinar with filters, stickers and animations with teams, you are professional and innovative! "}
            />
          }/>
        </div>
        <div className="bigImageContainer">
          <div className="bigImageTitle">Title 1</div>
          <Image
            preview={false}
            width={900}
            height={507}
            src="https://teamseffectfinaltest3.z22.web.core.windows.net/imagesticker/frames/teams_demo.gif"
          />
        </div>
        <div className="bigImageContainer">
          <div className="bigImageTitle">Title 2</div>
            <Carousel className="CarouselContainer">
              {/* <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div> */}
              <div>
                <video width="100%" height="100%" controls preload src="https://teamseffectfinaltest3.z22.web.core.windows.net/imagesticker/frames/dynamic_frame.mp4">
                </video>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
        </div>
    </div>

  );
}


export default ImageSlice;