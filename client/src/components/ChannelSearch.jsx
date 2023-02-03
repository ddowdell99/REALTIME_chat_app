import React, { useState, useEffect } from 'react';
import { useChatContext } from 'stream-chat-react';

import { SearchIcon } from '../assets'

const ChannelSearch = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const getChannels = async (text) => {
        try {
            // Fetching channels happens here.
        } catch (error) {
            // Reset query value to nothing if an error occurs while grabbing channels. Most likely channel does not exist.
            setQuery('') 
        }
    }

    const onSearch = (event) => {
        event.preventDefault();

        setLoading(true);
        setQuery(event.target.value);
        getChannels(event.target.value);
    }


  return (
    <div className='channel-search__container'>
        <div className='channel-search__input__wrapper'>
            <div className='channel-search__input__icon'>
                <SearchIcon />
            </div>
            <input 
                className='channel-search__input__text' 
                placeholder='Search' 
                type='text' 
                value={query}
                onChange={onSearch}
            />
        </div>
    </div>
  )
}

export default ChannelSearch