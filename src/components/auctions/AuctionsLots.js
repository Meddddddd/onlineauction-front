import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AuctionLots = ({ auction_id }) => {
    const [lots, setLots] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/auction_lots/${auction_id}`);
                setLots(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [auction_id]);

    return (
        <div className="auction-lots">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {lots.map(lot => (
                        <div key={lot.id} className="lot">
                            <h2>{lot.title}</h2>
                            <p>{lot.description}</p>
                            <p>Current bid: {lot.current_bid}</p>
                            <p>Bid increment: {lot.bid_increment}</p>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default AuctionLots;