import React from 'react';

const ClockHeader = ({currentTime, city}) => (
    <div>
        <span>
        {city} { currentTime } 
        </span>
    </div>
);

export default ClockHeader;