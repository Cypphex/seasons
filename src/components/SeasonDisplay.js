import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach!',
        icon: 'sun'
    },
    winter: {
        text: 'Burr, it\'s chilly!',
        icon: 'snowflake'
    }
};

const getSeason = (latitude, month) => {
    if (month > 2 && month < 9) {
        return latitude > 0 ? 'summer' : 'winter';
    } else {
        return latitude > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = props => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const { text, icon } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <h1>
                <i className={`icon-left massive ${icon} icon`} />
                {text}
                <i className={`icon-right massive ${icon} icon`} />
            </h1>
        </div>
    );
};

export default SeasonDisplay;