import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryLots = () => {
    const [lots, setLots] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchLots = async () => {
            const response = await axios.get('https://online-auction-demo-d74c703164c7.herokuapp.com');
            setLots(response.data);
        };

        fetchLots();
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        const response = await axios.get('/api/categories');
        setCategories(response.data);
    };



    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const filteredLots = selectedCategory
        ? lots.filter((lot) => lot.category_id === selectedCategory)
        : lots;

    return (
        <div className="Auction">
            <select onChange={handleCategoryChange}>
                <option value="">All categories</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>

            <div className="Lots">
                {filteredLots.map((lot) => (
                    <div key={lot.id} className="Lot">
                        <h2>{lot.title}</h2>
                        <p>{lot.description}</p>
                        <p>Category: {lot.category_id}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryLots;