import React from 'react';
import Chart from 'chart.js';

export default class Chart extends React.Component {
    constructor() {
        //create global config here
    }

    render() {
        return (
            <div className='chart'>
                <canvas id='chart'></canvas>
            </div>
        );
    }
}
