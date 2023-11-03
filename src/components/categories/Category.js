import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Lot from "../lots/Lot";

function Category() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [lots, setLots] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await axios.get('/api/categories');
            setCategories(response.data);
        };

        const fetchLots = async () => {
            const response = await axios.get('/api/lots');
            setLots(response.data);
        };

        fetchCategories();
        fetchLots();
    }, []);


    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };


     const filteredLots = lots.filter((lot) =>
         selectedCategory ? lot.category === selectedCategory : true
     );

    return (
        <div>
            <select value={selectedCategory} onChange={handleChange}>
                <option value="">All categories</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
            <Lot lots={filteredLots} />
        </div>
    );
}

export default Category;