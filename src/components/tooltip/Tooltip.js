import React from 'react';
import { Tooltip } from 'antd';

const TooltipText = ({ text }) => {
    return (
        // display the text with ... if it's too long and tooltip on hover
        <div>
            <Tooltip title={text}>
                {text?.length > 20 ? text.slice(0, 30) + '...' : text}
            </Tooltip>
        </div>
    )
}

export default TooltipText