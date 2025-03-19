import React from 'react';
import '../../Styles/Tooltip.css'; // Make sure to create this CSS file

const Tooltip = ({ text, element }) => {
    return (
        <div className="tooltip-container">
            {element}
            <span className="tooltip-text text-xs font-medium">{text}</span>
        </div>
    );
};

export default Tooltip;