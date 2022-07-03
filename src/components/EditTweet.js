import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { saveTweetAction } from '../actions/tweets'
import Tweet from './Tweet'

function EditTweet() {
  const { id } = useParams()
  const users = useSelector(state => state.users)
  const auth = useSelector(state => state.auth)
  const tweets = useSelector(state => state.tweets)
  const dispatch = useDispatch()

  const [text, setText] = useState('')

  const handleChange = (e) => setText(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(saveTweetAction({ text, author:auth, replyingTo:id }))
    setText('')
  }
  return (
    <div>
      <Tweet data={tweets[id]} user={users[tweets[id]?.author]} />
      <form className='new-tweet' onSubmit={handleSubmit}>
        <textarea
          placeholder="What's happening?"
          value={text}
          onChange={handleChange}
          className='textarea'
          maxLength={280}
        />
<br />
        <button
          className='btn'
          type='submit'
          disabled={text === ''}>
          Submit
        </button>
      </form>
      {tweets[id]?.replies.map(el => <Tweet key={tweets[el].id} data={tweets[el]} user={users[tweets[el]?.author]} />)}
    </div>
  )
}

export default EditTweet