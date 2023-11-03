import React, {useState, useEffect } from 'react';
import './Lot.css';

function Lot() {
    const [lots, setLots] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/lots'); // З
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setLots(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="lot">
            {lots.map((lot) => (
                <div key={lot.id} className="lot-card">
                    <h2>{lot.name}</h2>
                    <p>{lot.description}</p>
                    <p>Current Price: {lot.currentPrice}</p>
                    <img src={lot.imageUrl} alt={lot.name} />
                </div>
            ))}
        </div>
    );
}

export default Lot;