import React from "react";
import {ICrypto} from "../../interfaces/ICrypto";
import {Table} from "@mantine/core";

function CryptoTable() {

    return (
        <div>
            <Table striped highlightOnHover withBorder>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Slug</th>
                    <th>Price ($USD)</th>
                    <th>Trading Volume(24h) %</th>
                    <th>Market Cap %</th>
                </tr>
                </thead>
                <tbody>
                {//row data comes here}
                </tbody>
            </Table>
        </div>
    );
}

export default CryptoTable;
