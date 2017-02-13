import './main.scss';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Player from './components/players/Player.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to the Golden State Warriors home page!</h1>
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
