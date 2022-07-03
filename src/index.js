import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { applyMiddleware, compose, createStore } from 'redux'
import reducers from './reducers/root'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
    })
    : compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

function ColorfulBorder() {
  return (
    <React.Fragment>
      <ul className='border-container'>
        <li className='border-item' style={{ background: 'var(--red)' }} />
        <li className='border-item' style={{ background: 'var(--blue)' }} />
        <li className='border-item' style={{ background: 'var(--pink)' }} />
        <li className='border-item' style={{ background: 'var(--yellow)' }} />
        <li className='border-item' style={{ background: 'var(--aqua)' }} />
      </ul>
    </React.Fragment>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <ColorfulBorder />
    <Provider store={store}>
      
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)