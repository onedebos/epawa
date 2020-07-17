import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const parse = require('html-react-parser');

const Post = ({ posts }) => (
  <div className="bg-white py-2">
    <div className="container mx-auto flex items-center flex-wrap pb-12">
      {posts.map(post => (
        <div
          className="w-full md:w-1/3 xl:w-1/3 p-6 flex flex-col"
          key={post.id}
        >
          <Link to={post.slug}>
            <img
              className="hover:grow hover:shadow-lg"
              src={post.featured_image}
              alt={post.slug}
              style={{ width: '100%', height: '150px' }}
            />
            <div className="pt-3 flex items-center justify-between">
              <p className="">{post.title.rendered}</p>
            </div>
            <div className="pt-1 text-gray-900 text-xs">
              {parse(post.excerpt.rendered)}
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

Post.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Post;
