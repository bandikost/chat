import React from 'react'

export const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='find a user' />
      </div>
      <div className="userChat">
        <img src='' alt='' />
        <div className="userChatInfo">
          <span>Name</span>
        </div>
      </div>
    </div>
  )
}

export default Search;