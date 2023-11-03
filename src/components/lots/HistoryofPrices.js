import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import './HistoryofPrices.css';

const HistoryOfPrices = () => {
    const [histories, setHistories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('api/historyofprices');
            setHistories(result.data);
            setIsLoading(false);
        };

        fetchData();
    }, []);

    const displayHistories = () => {
        if (isLoading) {
            return <p>Loading...</p>;
        }

        if (histories.length === 0) {
            return <p>No data found.</p>;
        }

        return histories.sort((a, b) => b.date - a.date).map((history) => (
            <div key={history.id} className="history">
                <p>{moment(history.date).format('DD-MM-YYYY')}</p>
                <p>{history.price}</p>
                <p>{history.name_lot}</p>
                <p>{history.full_name}</p>
            </div>
        ));
    };

    return (
        <div className="histories-of-prices">
            <h2>Histories of Prices</h2>
            {displayHistories()}
        </div>
    );
};

export default HistoryOfPrices;