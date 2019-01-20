import React from "react";
import '../styles/legenditem.css'


const LegendItem = ({color, caption, count}) => {
    return (
        <div className="legend-item-container">
            <svg className="circle" height="50" width="50">
                <circle cx="25" cy="25" r="20" stroke={color} strokeWidth="3" fill={color}></circle>
                <text x="50%" y="50%" textAnchor="middle" stroke="white" fill="white" strokeWidth="1px" dy=".3em">{count}</text>
            </svg>
            <div className="caption"><p>{caption}</p></div>
        </div>
    );

}

export default LegendItem;