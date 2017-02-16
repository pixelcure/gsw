import React from 'react';

import './Team.scss';

import { getWarriorsTeamInfo, getTeamDashboard } from '../../Data';

export default class Team extends React.Component {
    constructor() {
        super();
        this.state = {
            data: null
        }
    }

    componentWillMount() {
        getWarriorsTeamInfo()
            .then((data) => {
                this.setState({data: data});
                console.log(data);
            })
            .catch((error) => {
                console.warn(error);
            });

        // getTeamDashboard()
        //     .then((data) => {
        //         this.setState({data: data})
        //         console.log(data);
        //     })
        //     .catch((error) => {
        //         console.warn(error);
        //     });
    }

    maybeDisplayTeamStats() {
        if (this.state.data !== null) {
            let ranks = this.state.data.teamSeasonRanks[0];
            return (
                <nav className='level'>
                    <div className='level-item has-text-centered'>
                        <div>
                            <p className='heading'>Assists Per Game</p>
                            <p className='title'>{ranks.astPg} - {this.transformRankings(ranks.astRank)}</p>
                        </div>
                    </div>
                    <div className='level-item has-text-centered'>
                        <div>
                            <p className='heading'> Points Per Game</p>
                            <p className='title'>{ranks.ptsPg} - {this.transformRankings(ranks.ptsRank)}</p>
                        </div>
                    </div>
                    <div className='level-item has-text-centered'>
                        <div>
                            <p className='heading'>Opponent Points Per Game</p>
                            <p className='title'>{ranks.oppPtsPg} - {this.transformRankings(ranks.oppPtsRank)}</p>
                        </div>
                    </div>
                    <div className='level-item has-text-centered'>
                        <div>
                            <p className='heading'>Rebounds Per Game</p>
                            <p className='title'>{ranks.rebPg} - {this.transformRankings(ranks.rebRank)}</p>
                        </div>
                    </div>
                </nav>
            );
        } else {
            <div className='is-loading'></div>
        }
    };

    maybeDisplayTeamInfo() {
        if (this.state.data !== null) {
            let info = this.state.data.teamInfoCommon[0];
            return (
                <nav className='level'>
                    <div className='level-item has-text-centered'>
                        <div>
                            <p className='heading'>Conference Rank</p>
                            <p className='title'>{this.transformRankings(info.confRank)}</p>
                        </div>
                    </div>
                    <div className='level-item has-text-centered'>
                        <div>
                            <p className='heading'>Division Rank</p>
                            <p className='title'>{this.transformRankings(info.divRank)}</p>
                        </div>
                    </div>
                    <div className='level-item has-text-centered'>
                        <div>
                            <p className='heading'>Wins</p>
                            <p className='title'>{info.w}</p>
                        </div>
                    </div>
                    <div className='level-item has-text-centered'>
                        <div>
                            <p className='heading'>Losses</p>
                            <p className='title'>{info.l}</p>
                        </div>
                    </div>
                </nav>
            );
        }
    };

    transformRankings(rank) {
        switch (rank) {
            case 1:
                return '1st';
                break;
            case 2:
                return '2nd'
                break;
            case 3:
                return '3rd'
                break;
            default:
                return rank + 'th';
                break;
        }
    };

    render() {
        return (
            <section className='section teamDashboard'>
                <h1 className='title'>League Rankings</h1>
                {this.maybeDisplayTeamStats()}
                <h1 className='title'>Team Rankings</h1>
                {this.maybeDisplayTeamInfo()}
            </section>
        );
    }
}
