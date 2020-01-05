import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas/rootSaga'
import rootReducer from './redux/reducers'

const sagaMiddleware = createSagaMiddleware()

const initialState = {}
const middleware = [sagaMiddleware]

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
sagaMiddleware.run(rootSaga)

export default store
