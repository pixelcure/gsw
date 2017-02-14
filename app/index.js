import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import NBA from 'nba';

import './main.scss';

import Hero from './components/parts/Hero/Hero.js';
import Player from './components/parts/Player/Player.js';

class App extends React.Component {
    constructor() {
        super();

        console.log(NBA);
        const curry = NBA.findPlayer('Stephen Curry');
        console.log(curry);
        let curryShoot = NBA.stats.playerStats(curry.playerId);

        curryShoot.then(function(stats) {
            console.log(stats);
        });

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
                    image='http://placehold.it/300'/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('main'));
