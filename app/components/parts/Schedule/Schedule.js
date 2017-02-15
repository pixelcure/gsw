import React from 'react';

import { getWarriorsTeamInfo, getTeamInfo } from '../../Data';

export default class Schedule extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        getWarriorsTeamInfo()
            .then((data) => console.log(data));

        getTeamInfo()
            .then((data) => console.log('team info', data));
    }

    createGame() {

    }

    render() {
        console.log(this.state);
        return (
            <div className='schedule'>
                <div className='box'></div>
            </div>
        );
    }
}
