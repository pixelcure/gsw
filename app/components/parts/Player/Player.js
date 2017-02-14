import React, { PropTypes } from 'react';

export default class Player extends React.Component {
    constructor() {
        super();
        this.state = {
            activeTab: 0
        }
    }

    switchTab(e, key) {
        e.preventDefault();
        this.setState({activeTab: key});
    }

    showContent() {
        if(this.state.activeTab === 0) {
            return (
                <div className='data-table'>content here</div>
            );
        } else if (this.state.activeTab === 1) {
            return (
                <div className='data-table'>more</div>
            );
        } else {
            return (
                <div className='data-table'>last</div>
            );
        }

    }

    render() {
        return (
            <div className='box player'>
                <article className='media'>
                    <div className='media-left'>
                        <figure>
                            <img src='http://placehold.it/200'/>
                            <figcaption>Stephen Curry</figcaption>
                        </figure>
                    </div>
                    <div className='media-content'>
                        <div className='tabs'>
                            <ul>
                                <li className={(this.state.activeTab === 0) ? 'is-active': null}><a onClick={(e) => this.switchTab(e, 0)} href='#'>Previous Game</a></li>
                                <li className={(this.state.activeTab === 1) ? 'is-active': null}><a href='#' onClick={(e) => this.switchTab(e, 1)}>Season</a></li>
                                <li className={(this.state.activeTab === 2) ? 'is-active': null}><a href='#' onClick={(e) => this.switchTab(e, 2)}>Career</a></li>
                            </ul>
                        </div>
                        {this.showContent()}
                    </div>
                </article>
            </div>
        );
    }
}
