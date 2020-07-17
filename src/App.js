import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import PostWithSlug from './PostWithSlug';
import Footer from './Footer';

import {
  postsSelector,
  getPosts,
  setPrevPg,
  setNextPg,
} from './features/post/PostsSlice';
import PostWithPagination from './PostWithPagination';

function App() {
  const { errors, loading, posts, currPageNum } = useSelector(postsSelector);
  const dispatch = useDispatch();

  const handleFetchPosts = pageNum => {
    dispatch(getPosts(pageNum));
  };

  useEffect(() => {
    handleFetchPosts(currPageNum);
  }, []);

  const handlePrev = () => {
    dispatch(setPrevPg());
    handleFetchPosts(currPageNum);
    console.log('prev', currPageNum);
  };

  const handleNext = () => {
    dispatch(setNextPg());
    handleFetchPosts(currPageNum);
    console.log('next', currPageNum);
  };

  return (
    <BrowserRouter>
      {loading ? '' : <Nav />}
      <Switch>
        <Route path="/:slug" component={PostWithSlug} />
        <Route
          exact
          path="/"
          render={() => (
            <PostWithPagination
              loading={loading}
              handlePrev={handlePrev}
              handleNext={handleNext}
              posts={posts}
              error={errors}
            />
          )}
        />
      </Switch>
      {loading ? '' : <Footer />}
    </BrowserRouter>
  );
}

export default App;
