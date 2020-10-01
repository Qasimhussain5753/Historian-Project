import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

// import { Provider } from 'react-redux';
// import { createstore,applyMiddleware,combineReducers } from 'redux';
// import Reducer from '../src/React_redux/User/user.action';
// import Reducer2 from '../src/React_redux/User/user2.action';
// import thunk from 'redux-thunk';
// const MasterReducer = combineReducers({
//   name: Reducer,
//   array: Reducer2
// })
// const Store = createstore(MasterReducer,{name:'qasim',array['eating','sleeping','Coding']},applyMiddleware(thunk));
// ReactDOM.render(
//   <React.StrictMode>
//    <Provider store={Store}> <App /></Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
