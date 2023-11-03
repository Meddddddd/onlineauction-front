import React, { useState, useEffect } from 'react';

const User = ({ id }) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/users/${id}`); // маршрут на сервері
                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className="user">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <p>ID: {user.id}</p>
                    <p>Email: {user.email}</p>
                    <p>First Name: {user.first_name}</p>
                    <p>Image: {user.image}</p>
                    <p>Last Name: {user.last_name}</p>
                    <p>Password: {user.password}</p>
                    <p>Notifications: {user.notifications ? 'Enabled' : 'Disabled'}</p>
                </>
            )}
        </div>
    );
};

export default User;