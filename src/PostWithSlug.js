import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { postsSelector, setPostWithSlug } from './features/post/PostsSlice';

const parse = require('html-react-parser');

const PostWithSlug = () => {
  const { postWithSlug } = useSelector(postsSelector);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const slugg = currentPath.split('/')[1];
    dispatch(setPostWithSlug(slugg));
  }, [location, dispatch]);

  if (postWithSlug.length < 1) {
    return <div />;
  }

  return (
    <div className="bg-white text-gray-600 leading-normal text-base tracking-normal">
      <div className="w-full container mx-auto mt-0 px-6 py-3">
        <div className="bg-teal-400">
          {/* <p>{postWithSlug[0].title}</p>
          <p>{postWithSlug[0].date}</p> */}
        </div>
        {parse(postWithSlug[0].content.rendered)}
      </div>
    </div>
  );
};

export default PostWithSlug;
