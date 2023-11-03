import React, { useState, useEffect } from 'react';
import axios from 'axios';


function LotInfo() {
    const [lots, setLots] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('./api/lots');
                console.log("1")
                setLots(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="LotInfo">
            <h1>Online Auction</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="lot-list">
                    {lots.map((lot) => (
                        <div key={lot.id} className="lot-card">
                            <h2>{lot.name}</h2>
                            <p>{lot.description}</p>
                            <img src={lot.image} alt={lot.name} />
                            <p>Current price: {lot.current_price}</p>
                            <p>Minimum price: {lot.minimum_price}</p>
                            <button>Bid</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LotInfo;