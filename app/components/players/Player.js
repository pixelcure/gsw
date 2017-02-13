import React, { PropTypes } from 'react';

export default class Player extends React.Component {
    constructor() {
        super();
        this.state = {
            activeTab: 0
        }
    }

    determineActiveTab(activeTab) {
        switch (activeTab) {
            case 0:
                return (<ul><li className='is-active'></li></ul>);
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
                                <li className='is-active'><a href='#'>Season Stats</a></li>
                                <li><a href='#'>Career Stats</a></li>
                                <li><a href='#'>Highlights</a></li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}
