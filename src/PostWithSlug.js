import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { postsSelector, getPostWithSlug } from './features/post/PostsSlice';
import LoadingScreen from './LoadingScreen';

const parse = require('html-react-parser');

const PostWithSlug = () => {
  const { postWithSlug, loading, errors } = useSelector(postsSelector);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const slugg = currentPath.split('/')[1];
    dispatch(getPostWithSlug(slugg));
  }, [location, dispatch]);

  if (loading || postWithSlug.length < 1) {
    return (
      <div>
        <LoadingScreen error={errors} />
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-600 leading-normal text-base tracking-normal ">
      <div className="w-full container mx-auto mt-0 px-6 py-3">
        <div className="bg-teal-600 p-5 mb-6">
          <p className="font-bold text-white text-2xl text-center">
            {postWithSlug[0].title.rendered}
          </p>
          <p className="font-bold text-white text-lg text-center">
            PUBLISHED ON:&nbsp;
            {new Date(postWithSlug[0].date).toLocaleDateString('en-GB', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        </div>
        {parse(postWithSlug[0].content.rendered)}
      </div>
    </div>
  );
};

export default PostWithSlug;
