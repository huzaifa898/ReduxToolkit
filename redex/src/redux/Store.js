import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
// steps 
// create store.js file in redux folder
// import configureStore from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/count'
// export const store = configureStore({
//     reducer: {
//         counter: counterReducer
//     }
// })
// import store in index.js file
// import {store} from './redux/store'
// wrap the App component in Provider component
// <Provider store={store}>
//   <App />
// </Provider>
// run the app
// npm start    