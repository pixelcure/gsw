import React from 'react';

export default class Hero extends React.Component {
    render() {
        return(
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <h1 className='title'>{this.props.title}</h1>
                </div>
            </section>
        );
    }
}
