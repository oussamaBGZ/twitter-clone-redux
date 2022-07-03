import React from 'react'
import TweetIcon from '../icons/Heart'
import Comment from '../icons/Commont'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { toggleHeart } from '../actions/tweets'
import { TiArrowBackOutline, TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti'

function Tweet({ data, user }) {

    const users = useSelector(state => state.users)
    const auth = useSelector(state => state.auth)
    const tweets = useSelector(state => state.tweets)
    const history = useHistory()
    const dispatch = useDispatch()
    const hasLiked = !data.likes.find(el => el === auth) ? true : false


    const timestamp = (time) => {
        const date = new Date(time)
        return date.getHours() + ":" + date.getMinutes() + " " + "|" + " " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    }
    const heartCount = (e) => {
        e.preventDefault()
        dispatch(toggleHeart({
            id: data.id,
            hasLiked,
            authedUser: auth
        }))
    }
    return (
        <div>
            <Link className="tweet" to={`/tweet/${data.id}`}>
                <img src={user.avatarURL} alt={"Avatar of " + user.name} className="avatar" />
                <div className="tweet-info">
                    <div>
                        <span>{user.name}</span>
                        <div>{
                            timestamp(data.timestamp)
                        }</div>
                        {data.replyingTo && <button className="replying-to" onClick={(e) => {
                            e.preventDefault()
                            history.push(`/tweet/${data.replyingTo}`)
                        }}>Replying to @{tweets[data.replyingTo].author}</button>}
                        <p>{data.text}</p>
                    </div>
                    <div className="tweet-icons">
                        <Comment />
                        <span>{data.replies.length}</span>
                        <button className="heart-button" onClick={heartCount}>
                            {!hasLiked
                                ? <TiHeartFullOutline color='#e0245e' className='tweet-icon' />
                                : <TiHeartOutline className='tweet-icon' />}
                        </button>
                        <span>{data.likes.length}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Tweet