import React,{useEffect} from 'react'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'
import EditTweet from './EditTweet'
import AddTweet from './AddTweet'
import Tweets from './Tweets'
import { LoadingBar } from 'react-redux-loading'
import { fetchIntialDataAction } from '../actions/initial'
import { useDispatch, useSelector } from 'react-redux'

export default function App() {
  const dispatch=useDispatch()
  const loading = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(fetchIntialDataAction())
  }, [])
  return (
    <div className='container'>
      <BrowserRouter>
      <LoadingBar style={{ backgroundColor: 'blue', height: '5px' }} />
        <div className='navlinks'>
          <NavLink to="/" exact activeClassName="selected">Home</NavLink>
          <NavLink to="/new/" exact activeClassName="selected">New Tweet</NavLink>
        </div>
       {loading && <Switch>
          <Route path="/" exact>
            <Tweets />
          </Route>
          <Route path="/tweet/:id">
            <EditTweet />
          </Route>
          <Route path="/new">
            <AddTweet />
          </Route>
        </Switch>}
      </BrowserRouter>
    </div>
  )
}