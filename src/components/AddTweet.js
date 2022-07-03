import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { saveTweetAction } from '../actions/tweets'

function AddTweet() {
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const auth = useSelector(state => state.auth)
  const history = useHistory()
  const handleChange = (e) => setText(e.target.value)
  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(saveTweetAction({ text, author: auth, }))
    history.push('/')
  }
  return (
    <div>
      <br /><br /><br />
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
    </div>
  )
}

export default AddTweet