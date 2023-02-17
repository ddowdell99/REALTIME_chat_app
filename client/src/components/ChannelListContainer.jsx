import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import ControllerIcon from '../assets/pixelcontroller.png';
import LogoutIcon from '../assets/logout.png';

const cookies = new Cookies();

// Sidebar function contains a return function because it was not properly showing up without one. Not sure if this will cause problems later. 
const SideBar = ({ logout }) => {
  return (
    <div className='channel-list__sidebar'>
      <div className='channel-list__sidebar__icon1'>
        <div className='icon1__inner'>
          <img src={ControllerIcon} alt="Pixel Controller" width="30" />
        </div>
      </div>
      <div className='channel-list__sidebar__icon2'>
        <div className='icon1__inner' onClick={ logout }>
          <img src={LogoutIcon} alt="Logout" width="20" />
        </div>
      </div>
    </div>
  )
};

const CompanyHeader = () => {
  return (
    <div className='channel-list__header'>
      <p className='channel-list__header__text'>Player Two</p>
    </div>
  )
}


const ChannelListContainer = () => {
  const logout = () => {
      cookies.remove("token");
      cookies.remove('userID');
      cookies.remove('username');
      cookies.remove('fullName');
      cookies.remove('avatarURL');
      cookies.remove('hashedPassword');
      cookies.remove('phoneNumber');

      window.location.reload();
  }

  return (
    <>
      <SideBar logout = {logout}/>
      <div className='channel-list__list__wrapper'>
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => { }}

          // This List below is a function that helps to give our own TeamChannelList the same props that the getStream ChannelList has.
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type='team'
            />
          )}
          Preview = {(previewProps) => (
            <TeamChannelPreview 
              {...previewProps}
              type='team'
            />
          )}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => { }}

          // This List below is a function that helps to give our own TeamChannelList the same props that the getStream ChannelList has.
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type='messaging'
            />
          )}
          Preview = {(previewProps) => (
            <TeamChannelPreview 
              {...previewProps}
              type='messaging'
            />
          )}
        />
      </div>

    </>
  )
}

export default ChannelListContainer