import React from 'react';

export default class Table extends React.Component {
    constructor() {
        super();
    }

    createTableHeader() {
        let types = Object.keys(this.props.data);
        types.reverse().splice(21, 3);
        return types.map((type, index) => {
            return(
                <th key={index}>{type}</th>
            )
        });
    }

    createTableRow() {
        return (
            <tr>
                <td>data</td>
            </tr>
        );
    }

    render() {
        return(
            <div className='table-container'>
                <table className='table is-striped'>
                    <thead>
                        <tr>
                            {this.createTableHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.createTableRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}
