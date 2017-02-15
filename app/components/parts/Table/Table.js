import React from 'react';

export default class Table extends React.Component {
    constructor() {
        super();
    }

    filterUneededData(value) {

    }

    createTableHeader() {
        let types = Object.keys(this.props.data).reverse().slice(0, -6);
        console.log(types);
        return types.map((type, index) => {
            return (
                <th key={index}>{type}</th>
            )
        });
    }

    createTableRow() {
        let data = Object.entries(this.props.data).reverse().slice(0, -6);
        data.slice(21, 3);
        console.log(data);
        return data.map((stat, index) => {
            return (
                <td key={index}>{stat[1]}</td>
            );
        });
    }

    render() {
        console.log(this.props.data)
        return(
            <div className='table-container'>
                <table className='table is-striped'>
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
