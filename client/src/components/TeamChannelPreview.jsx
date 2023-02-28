import React from "react";
import { Avatar, useChatContext } from "stream-chat-react";

const TeamChannelPreview = ({ channel, type, setToggleContainer, setIsCreating, setIsEditing, setActiveChannel }) => {
  // can use : to rename values that are pulled from an import
  const { channel: activeChannel, client } = useChatContext();

  //   Can use () instead of {} to return item right away without return inside of function
  const ChannelPreview = () => (
    <p className="channel-preview__item">
      # {channel?.data?.name || channel?.data?.id}
    </p>
  );

  const DirectPreview = () => {
    // Since the data we receive would be in id: data format, we use Object.values to grab just the data we need and then filtering out any client IDs that match the user id
    const members = Object.values(channel.state.members).filter(
      ({ user }) => user.id !== client.userID
    );

    console.log(members[0]);

    return (
      <div className="channel-preview__item single">
        <Avatar
          image={members[0]?.user?.image}
          name={members[0]?.user?.fullName || members[0]?.user?.name }
          size={24}
        />
        <p>{members[0]?.user?.fullName || members[0]?.user?.name }</p>
      </div>
    );
  };

  return (
    <div
      className={
        channel?.id === activeChannel?.id
          ? "channel-preview__wrapper__selected"
          : "channel-preview__wrapper"
      }
      onClick={() => {
        setActiveChannel(channel);
        setIsCreating(false);
        setIsEditing(false);

        if(setToggleContainer) {
            setToggleContainer((prevState) => !prevState)
        }
      }}
    >
      {type === "team" ? <ChannelPreview /> : <DirectPreview />}
    </div>
  );
};

export default TeamChannelPreview;
