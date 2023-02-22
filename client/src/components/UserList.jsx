import React, { useEffect, useState } from 'react';
import { Avatar, useChatContext } from 'stream-chat-react';

import { InviteIcon } from '../assets';

const ListContainer = ({ children }) => {
    return (
        <div className='user-list__container'>
            <div className='user-list__header'>
                <p>User</p>
                <p>Invite</p>
            </div>
            {children}
        </div>
    )
}

const UserItem = ({ user }) => {
    const [selected, setSelected] = useState(false)

    const handleSelect = () => {
        setSelected((prevSelected) => !prevSelected);
    }

    return (
        <div className='user-item__wrapper' onClick={handleSelect}>
            <div className='user-item__name-wrapper'>
                <Avatar image={user.image} name={user.fullName || user.id } size={32}/>
                <p className='user-item__name'>{user.fullName || user.id }</p>
            </div>
            {selected ? <InviteIcon /> : 
            <div className='user-item__invite-empty'/>}
        </div>
    )
}

const UserList = () => {
    const { client } = useChatContext();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [listEmpty, setListEmpty] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
            if (loading) return;

            setLoading(true);

            try {
                // Querying for users 
                const response = await client.queryUsers(
                    // Excluding current user
                    { id: { $ne: client.userID } },
                    // Sorting the users
                    { id: 1 },
                    // Only view 8 members
                    { limit: 8 }
                );

                // Checking if it caught any users
                if (response.users.length) {
                    // Set users to current state for users
                    setUsers(response.users);
                } else {
                    // If no users caught, set ListEmpty state to true.
                    setListEmpty(true);
                }

            } catch (error) {
                console.log(error);
            }
            // After everything, set loading state to false. 
            setLoading(false);
        }
        // Calling the function if client is connected to stream chat.
        if (client) getUsers()
    }, [])
    return (
        <ListContainer>
            {/* Checking if loading */}
            {loading ? <div className='user-list__message'>
                Loading users...
            </div> : (
                // Mapping over the users and sending each user through to the UserItem component
                users?.map((user, i) => (
                    <UserItem index={i} key={user.id} user={user} />
                ))
            )}
        </ListContainer>
    )
}

export default UserList;