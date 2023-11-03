import React, { useState, useEffect } from 'react';
import axios from 'axios'

const AuctionResult = ({ auction_id }) => {
    const [auctionResults, setAuctionResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get(`/api/auction_results/${auction_id}`);
                setAuctionResults(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [auction_id]);

    return (
        <div className="auction-result">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {auctionResults.map(result => (
                        <div key={result.id} className="auction-result-item">
                            <p>ID: {result.id}</p>
                            <p>Ends: {result.ends}</p>
                            <p>ID: {result.id}</p>
                            <p>Start: {result.start}</p>
                            <p>Name Auction: {result.name_auction}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AuctionResult