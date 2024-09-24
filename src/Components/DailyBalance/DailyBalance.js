import React from 'react';
import Table from 'react-bootstrap/Table';
const DailyBalance = () => {
    return (

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th colSpan={3}>Dziś</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td colSpan={2}>Wypalone papierosy</td>
                    <td></td>
                </tr>
                <tr>
                    <td colSpan={2}>Koszt</td>
                    <td></td>
                </tr>
                <tr>

                    <td colSpan={2}>Żyjesz krócej o</td>
                    <td></td>
                </tr>
                </tbody>
            </Table>

    );
};

export default DailyBalance;