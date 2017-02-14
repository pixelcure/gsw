import React from 'react';

import { getWarriorsTeamInfo } from '../../Data';

export default class Schedule extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        getWarriorsTeamInfo()
            .then((data) => console.log(data));
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
