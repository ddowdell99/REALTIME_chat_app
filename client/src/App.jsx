import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

// Importing components
import { ChannelListContainer, ChannelContainer, Auth } from './components';

import './App.css'

const apiKey = 'khx9nvqvecgz';

const client = StreamChat.getInstance(apiKey);

const authToken = false;

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