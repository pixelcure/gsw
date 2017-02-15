import React from 'react';

import { getTeamInfo } from '../../Data';

export default class Team extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        getTeamInfo()
            .then((data) => {
                this.setState({data: data});
                console.log(data);
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    render() {
        return (
            <section className='section'>
                <div className='heading'>
                    <h1 className='title'>Current Standings</h1>
                </div>

                <div className='tile is-ancestor'>
                    <div className='tile'>
                        <h2 className='subtitle'>Points Per Game</h2>
                        {/* <p>{this.state.data}</p> */}
                    </div>
                </div>
            </section>
        );
    }
}
