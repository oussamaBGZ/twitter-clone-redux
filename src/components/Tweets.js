import React from 'react'
import { useSelector } from 'react-redux'
import Tweet from './Tweet.js'
function Tweets() {
  const tweets= useSelector(state => state.tweets)
  const users= useSelector(state => state.users)

 
  
  return (
    <div>
      {
        Object.keys(tweets).reverse().map(el => <Tweet key={tweets[el].id} data={tweets[el]} user={users[tweets?.[el]?.author]}/>)
      }
      
    </div>
  )
}

export default Tweets