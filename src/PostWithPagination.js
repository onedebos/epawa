import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import Pagination from './Pagination';
import LatestPostsNav from './LatestPostsNav';
import LoadingScreen from './LoadingScreen';

const PostWithPagination = ({
  posts,
  handlePrev,
  handleNext,
  loading,
  error,
}) => {
  if (loading) {
    return (
      <div>
        <LoadingScreen error={error} />
      </div>
    );
  }
  return (
    <div className="bg-white text-gray-600 leading-normal text-base tracking-normal">
      <LatestPostsNav />
      <Pagination handlePrev={handlePrev} handleNext={handleNext}>
        <Post posts={posts} />
      </Pagination>
    </div>
  );
};

export default PostWithPagination;

PostWithPagination.propTypes = {
  posts: PropTypes.array.isRequired,
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};
