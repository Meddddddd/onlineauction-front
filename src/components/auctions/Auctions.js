import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Auction = () => {
    const [auctions, setAuctions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/auctions');
                setAuctions(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="auctions">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {auctions.map(auction => (
                        <div key={auction.id} className="auction">
                            <h2>{auction.title}</h2>
                            <p>{auction.description}</p>
                            <p>Starts: {new Date(auction.start).toLocaleString()} </p>
                            <p>Ends: {new Date(auction.ends).toLocaleString()} </p>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default Auction;