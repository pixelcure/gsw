import './main.scss';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

//import players
import StephCurry from './players/StephCurry/StephCurry';

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
                <StephCurry/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('main'));
