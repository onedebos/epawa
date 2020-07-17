import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import './styles/index.css';
import { Provider } from 'react-redux';
import postsSliceReducer from './features/post/PostsSlice';
import App from './App';

require('typeface-nunito');

const store = configureStore({
  reducer: { posts: postsSliceReducer },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
