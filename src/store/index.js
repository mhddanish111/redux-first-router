import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import {connectRoutes} from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import reducers from '../reducers';
import routesMap from '../routesMap';

const history = createHistory();
const {reducer,middleware,enhancer} = connectRoutes(history,routesMap);

const rootReducers = combineReducers({...reducers, location:reducer});
const middleWaresData = applyMiddleware(middleware);
const composeEnhancer = compose(enhancer,middleWaresData);

const store = createStore(rootReducers,composeEnhancer);
console.log("store = ",store.getState())
export default store;