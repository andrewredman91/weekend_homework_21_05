import React from 'react';
import PremierLeague from '../images/PremierLeague.png';


const LeagueInfo = (props) => {
    let imgSrc;
    switch (props.leagueCaption) {


        case "Premier League":
            imgSrc = PremierLeague;
            break;

        default:
            imgSrc = PremierLeague;
            break;
    }

    return (
        <div className="league-info">
            <img src={imgSrc} alt="" />
        </div>
    );
};

export default LeagueInfo;