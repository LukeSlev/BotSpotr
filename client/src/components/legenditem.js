import React from "react";
import '../styles/legenditem.css'


const LegendItem = ({color, caption, count}) => {
    return (
        <div className="legend-item-container">
            <svg className="circle" height="80" width="80">
                <circle cx="40" cy="40" r="30" stroke={color} strokeWidth="3" fill={color}></circle>
                <text x="50%" y="50%" textAnchor="middle" stroke="white" fill="white" strokeWidth="0.5pxpx" dy=".3em">{count}%</text>
            </svg>
            <div className="caption"><h3>{caption}</h3></div>
        </div>
    );

}

export default LegendItem;
