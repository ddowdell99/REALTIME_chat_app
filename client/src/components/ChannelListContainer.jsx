import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import ControllerIcon from '../assets/pixelcontroller.png';
import LogoutIcon from '../assets/logout.png';

// Sidebar function contains a return function because it was not properly showing up without one. Not sure if this will cause problems later. 
const SideBar = () => {
  return (
    <div className='channel-list__sidebar'>
      <div className='channel-list__sidebar__icon1'>
        <div className='icon1__inner'>
          <img src={ ControllerIcon } alt="Pixel Controller" width="30" />
        </div>
      </div>
      <div className='channel-list__sidebar__icon2'>
        <div className='icon1__inner'>
          <img src={LogoutIcon} alt="Logout" width="20" />
        </div>
      </div>
    </div>
  )
};


const ChannelListContainer = () => {
  return (
    <>
      <SideBar />

    </>
  )
}

export default ChannelListContainer