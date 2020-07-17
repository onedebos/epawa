import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import PostWithSlug from './PostWithSlug';
import Footer from './Footer';

import { postsSelector, getPosts } from './features/post/PostsSlice';
import PostWithPagination from './PostWithPagination';

function App() {
  const { errors, loading, posts } = useSelector(postsSelector);
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(1);

  const handleFetchPosts = pageNum => {
    dispatch(getPosts(pageNum));
  };

  useEffect(() => {
    handleFetchPosts(pageNum);
  }, []);

  const handlePrev = () => {
    setPageNum(prevState => prevState - 1);
    handleFetchPosts(pageNum);
  };

  const handleNext = () => {
    setPageNum(prevState => prevState + 1);
    handleFetchPosts(pageNum);
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
