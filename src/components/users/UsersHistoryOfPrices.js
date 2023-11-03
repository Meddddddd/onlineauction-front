import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersHistoryOfPrices = ({ history_of_prices_id, user_id }) => {
    const [prices, setPrices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/users_history_of_prices/${history_of_prices_id}/${user_id}`);
                setPrices(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [history_of_prices_id, user_id]);

    return (
        <div>
            <h2>Users History of Prices</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {prices.map((price) => (
                        <li key={price.id}>
                            <strong>{price.item_name}</strong>: ${price.price} at {new Date(price.created_at).toLocaleString()}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UsersHistoryOfPrices;