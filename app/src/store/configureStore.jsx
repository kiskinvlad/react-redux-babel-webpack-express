import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'


export default function configureStore(initialState = {}){
  const middlewares = [thunk, promise];
  if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger();
    middlewares.push(logger);
  }
  const store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middlewares)
  );
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store;
}