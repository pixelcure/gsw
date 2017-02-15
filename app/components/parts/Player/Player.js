import React, { PropTypes } from 'react';

import { getPlayerStats } from '../../Data';

import Table from '../../parts/Table/Table';

export default class Player extends React.Component {
    constructor() {
        super();
        this.state = {
            activeTab: 0,
            playerData: null
        };
    }

    componentDidMount() {
        let self = this;
        getPlayerStats(this.props.name)
            .then(function(data) {
                self.setState({playerData: data})
            });
    }

    switchTab(e, key) {
        e.preventDefault();
        this.setState({activeTab: key});
    }

    maybeShowContent() {
        if(this.state.playerData !== null) {
            if(this.state.activeTab === 0) {
                return (
                    <div className='data-table'>more</div>
                );
            } else if (this.state.activeTab === 1) {
                let seasonTotal = this.state.playerData.seasonTotalsRegularSeason;
                return (
                    <Table
                        data={seasonTotal[seasonTotal.length - 1]}/>
                );
            } else {
                let careerTotal = this.state.playerData.careerTotalsRegularSeason;
                return (
                    <Table
                        data={careerTotal[0]}/>
                );
            }
        }
    }

    render() {
        return (
            <div className='box player'>
                <article className='media'>
                    <div className='media-left'>
                        <figure>
                            <img className='image is-128x128' src={this.props.image}/>
                            <figcaption>{this.props.name}</figcaption>
                        </figure>
                    </div>
                    <div className='media-content'>
                        <div className='tabs'>
                            <ul>
                                <li className={(this.state.activeTab === 0) ? 'is-active': null}><a href='#' onClick={(e) => this.switchTab(e, 0)}>Previous Game</a></li>
                                <li className={(this.state.activeTab === 1) ? 'is-active': null}><a href='#' onClick={(e) => this.switchTab(e, 1)}>Season</a></li>
                                <li className={(this.state.activeTab === 2) ? 'is-active': null}><a href='#' onClick={(e) => this.switchTab(e, 2)}>Career</a></li>
                            </ul>
                        </div>
                        {this.maybeShowContent()}
                    </div>
                </article>
            </div>
        );
    }
}

Player.PropTypes = {
    name: React.PropTypes.string,
    image: React.PropTypes.string
}
