import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import './main.scss';

import Hero from './components/parts/Hero/Hero.js';
import Schedule from './components/parts/Schedule/Schedule';
import Player from './components/parts/Player/Player.js';

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Hero title='Welcome to the Golden State Warriors home page!'/>
                <h2>We need:</h2>
                <ul>
                    <li>Player info</li>
                    <li>player stats</li>
                    <li>Game info</li>
                    <li>Schedule</li>
                </ul>
                <Player
                    name='Stephen Curry'
                    image='http://placehold.it/200'/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('main'));
