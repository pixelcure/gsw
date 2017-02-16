import React from 'react';

import './Hero.scss';

export default class Hero extends React.Component {
    render() {
        return(
            <section className='hero is-primary is-large'>
                <div className='hero-body'>
                    <div className='container'>
                        <h1 className='title'>{this.props.title}</h1>
                    </div>
                </div>
            </section>
        );
    }
}
