import React, {useEffect, useState} from "react";
import {ICrypto} from "../../interfaces/ICrypto";
import {Progress, Table} from "@mantine/core";
import percentage from "../../assets/percentage.svg";

function CryptoTable() {
    const [data, setData] = useState<any[]>([]);

    const getData = async () => {
        let response = await fetch("/api")
        let data = await response.json()
        setData(data)
    }

    useEffect(() => {
        getData()
    }, []);

    const rows = data["data" as unknown as number]?.map((value: ICrypto) => {
        const quoteUsdProperties = value.quote['USD']
        const marketCapProgressBar = <Progress size="xl" radius="md" value={quoteUsdProperties.market_cap_dominance}/>

        return (
            <tr key={value.id}>
                <td>{value.name}</td>
                <td>{value.symbol}</td>
                <td>{value.slug}</td>
                <td>{(quoteUsdProperties.price).toFixed(2)}</td>
                <td>{(quoteUsdProperties.percent_change_24h).toFixed(2)}</td>
                <td>{marketCapProgressBar} {(quoteUsdProperties.market_cap_dominance).toFixed(2)} <img width='15'
                                                                                                       height='12'
                                                                                                       src={percentage}/>
                </td>
            </tr>
        )
    })

    return (
        <div>
            <Table striped highlightOnHover withBorder>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Slug</th>
                    <th>Price ($USD)</th>
                    <th>Trading Volume(24h) <img width='15' height='12' src={percentage}/></th>
                    <th>Market Cap <img width='15' height='12' src={percentage}/></th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </Table>
        </div>
    );
}

export default CryptoTable;
