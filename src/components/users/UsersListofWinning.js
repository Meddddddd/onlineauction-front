import React, { Component } from 'react';
import axios from 'axios';

class UsersListofWinning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersList: [],
        };
    }

    componentDidMount() {
        this.getUsersListofWinning();
    }

    getUsersListofWinning = async () => {
        try {
            const response = await axios.get('/api/users_list_lot_of_winning', {
                params: { list_lot_of_winning_id: this.props.list_lot_of_winning_id, user_id: this.props.user_id },
            });

            this.setState({ usersList: response.data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    render() {
        return (
            <div>
                <h2>List of Winners</h2>
                <ul>
                    {this.state.usersList.map((user) => (
                        <li key={user.id}>{user.full_name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default UsersListofWinning;