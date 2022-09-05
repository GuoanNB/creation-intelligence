import './index.css';
import React from 'react';
import { Image } from 'antd';

const ImageCell = ({isReversed, cardTitle, cardText, coverContent}) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="imgCellContainer"         
    onMouseEnter={() => setVisible(true)}
    onMouseLeave={() => setVisible(false)}>
      <Image
        preview={false}
        width={"100%"}
        height={"100%"}
        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
      />
      {!visible && <div className={isReversed ? "upTab" : "downTab"}>
        <div className="tabTitle">
            {cardTitle}
        </div>
        <div className="tabText">
            {cardText}
        </div>
      </div>}
      { visible && <div className={isReversed ? "light-cover" : "dark-cover"}>{coverContent}</div>}
    </div>
  );
}


export default ImageCell;