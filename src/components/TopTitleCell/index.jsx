import './topTitle.css';
import React from 'react';
import { Image } from 'antd';
import { Triangle } from '../../containers/assets';


const TopTitleCell = ({oriTitle, recTitle, PVLift, OriCTR, OptCTR, imageURL}) => {

  return (
    <div className="TitleCellCointainer">
        <div className="InfoContainer">
            <div className="RecTitle">
                Recommended headline
            </div>
            <div className="RecTitleContent"  title={recTitle}>
                {recTitle}
            </div>
            <div className="DataArea">
                <div className="DataAreaHalf">
                    <div className="OriTitle">Original headlines</div>
                    <div className="OriTitleContent" title={oriTitle}>{oriTitle}</div>

                </div>
                <div className="DataAreaRight">
                    <div className="DataCell ">
                        <div className="DataCellTitle">PV lift</div>
                        <div className="DataCellContent GrowthData">{Triangle()}{PVLift}</div>

                    </div>
                    <div className="DataCell">
                        <div className="DataCellTitle">Original CTR</div>
                        <div className="DataCellContent">{OriCTR}</div>


                    </div>
                    <div className="DataCell">
                        <div className="DataCellTitle">Optimized CTR</div>
                        <div className="DataCellContent" >{OptCTR}</div>
                    </div>

                </div>


            </div>
        </div>
        <Image
          style={{borderRadius: "4px"}}
          preview={true}
          width={251}
          height={156}
          src={imageURL}
        />
    </div>
  );
}


export default TopTitleCell;