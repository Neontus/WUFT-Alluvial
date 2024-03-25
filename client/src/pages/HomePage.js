import React, { useEffect, useState } from 'react';

export default function HomePage() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080')
            .then(response => response.json())
            .then(data => setTableData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Table Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Max Supply</th>
                        <th>Circulating Supply</th>
                        <th>Total Supply</th>
                        <th>Price</th>
                        <th>Volume 24h</th>
                        <th>Percent Change 24h</th>
                        <th>Market Cap</th>
                        <th>Fully Diluted Market Cap</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(row => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.symbol}</td>
                            <td>{row.maxSupply}</td>
                            <td>{row.circulatingSupply}</td>
                            <td>{row.totalSupply}</td>
                            <td>{row.price}</td>
                            <td>{row.volume24h}</td>
                            <td>{row.percentChange24h}</td>
                            <td>{row.marketCap}</td>
                            <td>{row.fullyDilutedMarketCap}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

