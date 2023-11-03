import React, { Component } from 'react';
import axios from 'axios';

class UsersListofCreatedLots extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersList: [],
        };
    }
    componentDidMount() {
        this.getUsersListofCreatedLots();
    }

    getUsersListofCreatedLots = async () => {
        try {
            const response = await axios.get('/api/users_list_of_created_lots', {
                params: { list_of_created_lots_id: this.props.list_of_created_lots_id, user_id: this.props.user_id },
            });

            this.setState({ usersList: response.data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    render() {
        return (
            <div>
                <h2>List of Created Lots</h2>
                <ul>
                    {this.state.usersList.map((user) => (
                        <li key={user.id}>{user.full_name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default UsersListofCreatedLots;