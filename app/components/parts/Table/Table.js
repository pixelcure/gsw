import React from 'react';

export default class Table extends React.Component {
    constructor() {
        super();
    }

    filterUneededData(value) {

    }

    createTableHeader() {
        let types = Object.keys(this.props.data).reverse().slice(0, -6);
        return types.map((type, index) => {
            return (
                <th key={index}>{type}</th>
            )
        });
    }

    createTableRow() {
        let data = Object.entries(this.props.data).reverse().slice(0, -6);
        data.slice(21, 3);
        return data.map((stat, index) => {
            return (
                <td key={index}>{stat[1]}</td>
            );
        });
    }

    render() {
        return(
            <div className='container'>
                <table className='table is-striped is-hidden-mobile'>
                    <thead>
                        <tr>
                            {this.createTableHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {this.createTableRow()}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
