import React from "react";
import '../styles/tooltip.css'

const Tooltip = ({visible, text}) => {
    console.log("visible: ", visible);
    if(visible) {
        return (
            <div className="tooltip">
                <p>{text}</p>
            </div>
        );
    }
    else {
        return null;
    }
}

export default Tooltip;