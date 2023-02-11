import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

// Importing components
import { ChannelListContainer, ChannelContainer, Auth } from './components';

import './App.css'

const cookies = new Cookies();

const apiKey = 'khx9nvqvecgz';
const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);

if (authToken) {
  // This will either grab the user from the provided information or create a new user
  client.connectUser({
    id: cookies.get('userID'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    image: cookies.get('avatarURL'),
    hashedPassword: cookies.get('hashedPassword'),
    phoneNumber: cookies.get('phoneNumber')
  }, authToken)
}

const App = () => {

  if (!authToken) return <Auth />

  return (
    <div className='app__wrapper'>

      {/* Below theme could be switched but need to look more into stream docs. */}
      <Chat client={client} theme='team light'> 
      
        <ChannelListContainer />
        <ChannelContainer  />
      </Chat>
    </div>
  );
}

export default App;