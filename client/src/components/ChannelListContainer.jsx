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
          <img src={ControllerIcon} alt="Pixel Controller" width="30" />
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

const CompanyHeader = () => {
  return (
    <div className='channel-list__header'>
      <p className='channel-list__header__text'>Player One</p>
    </div>
  )
}


const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
      <div className='channel-list__list__wrapper'>
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}

          // This List below is a function that helps to give our own TeamChannelList the same props that the getStream ChannelList has.
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type='team'
            />
          )}
        />
      </div>

    </>
  )
}

export default ChannelListContainer