import { customizeSVG, msnSVG } from "../../../Icons/svg";
import "./index.css"
const TabBar = ({ tabIndex, onChange }) => {
    return (
        <div className="tab">
            <div className={`tab-button${tabIndex === 0 ? " active" : ""}`} onClick={() => onChange(0)}>
                {customizeSVG()}
                <span>Customized content</span>
            </div>
            <div className={`tab-button${tabIndex === 1 ? " active" : ""}`} onClick={() => onChange(1)}>
                {msnSVG()}
                <span>MSN content</span>
            </div>
        </div>
    )
}

export default TabBar