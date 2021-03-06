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
        getPlayerStats(this.props.name)
            .then((data) => {
                this.setState({playerData: data});
                // console.log(this.props.name, data);
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

    renderPlayerImage() {
        return (
            <div>
                <figure className='image is-hidden-touch'>
                    <img src={this.props.image}/>
                    <figcaption>{this.props.name}</figcaption>
                </figure>
                <figure className='image is-128x128 is-hidden-desktop'>
                    <img src={this.props.image}/>
                    <figcaption>{this.props.name}</figcaption>
                </figure>
            </div>
        )
    }

    render() {
        return (
            <div className='box player'>
                <article className='media'>
                    <div className='media-left'>
                        {this.renderPlayerImage()}
                    </div>
                    <div className='media-content'>
                        <div className='tabs is-hidden-mobile'>
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
