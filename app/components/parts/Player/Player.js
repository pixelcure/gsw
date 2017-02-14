import React, { PropTypes } from 'react';

export default class Player extends React.Component {
    constructor() {
        super();
        this.state = {
            activeTab: 0
        }
    }

    switchTab(e, key) {
        switch (key) {
            case 0:
                this.setState({activeTab: 0});
                break;
            case 1:
                this.setState({activeTab: 1});
                break;
            case 2:
                this.setState({activeTab: 2});
                break;
            default:
                break;
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
                                <li className={(this.state.activeTab === 0) ? 'is-active': null}><a onClick={(e) => this.switchTab(e, 0)} href='#'>Season Stats</a></li>
                                <li className={(this.state.activeTab === 1) ? 'is-active': null}><a href='#' onClick={(e) => this.switchTab(e, 1)}>Career Stats</a></li>
                                <li className={(this.state.activeTab === 2) ? 'is-active': null}><a href='#' onClick={(e) => this.switchTab(e, 2)}>Highlights</a></li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}
