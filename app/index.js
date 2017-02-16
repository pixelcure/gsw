import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import './main.scss';

import PlayerNames from './components/parts/Team.json';

import Hero from './components/parts/Hero/Hero';
import Team from './components/parts/Team/Team';
import Schedule from './components/parts/Schedule/Schedule';
import Player from './components/parts/Player/Player';

class App extends React.Component {
    constructor() {
        super();
    }

    showPlayers() {
        return PlayerNames.map((player, index) => {
            return (
                <Player
                    name={player.name}
                    image={player.image}
                    key={index}/>
            );
        });
    }

    render() {
        return (
            <div>
                <Hero title='Golden State Warriors - Lock in'/>
                {/* <ul>
                    <li>Game info</li>
                    <li>Schedule</li>
                </ul> */}
                <div className='container is-fluid'>
                    <Team/>
                    {/* <Schedule/> */}
                    {this.showPlayers()}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('main'));
