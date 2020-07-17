import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const initialState = {
  loading: false,
  posts: [],
  postWithSlug: [],
  errors: '',
  currPageNum: 1,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, { payload }) => {
      state.posts = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setErrors: (state, { payload }) => {
      state.errors = payload;
    },
    setPostWithSlug: (state, { payload }) => {
      state.postWithSlug = payload;
    },
    setNextPg: state => {
      state.currPageNum += 1;
    },
    setPrevPg: state => {
      state.currPageNum -= 1;
    },
  },
});

export const {
  setPosts,
  setLoading,
  setErrors,
  setPostWithSlug,
  setNextPg,
  setPrevPg,
} = postsSlice.actions;

export default postsSlice.reducer;

export const postsSelector = state => state.posts;

export function getPosts(pageNum) {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
      const posts = await axios.get(
        `https://epower.ng/wp-json/wp/v2/posts?per_page=6&page=${pageNum}`,
      );

      dispatch(setPosts(posts.data));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setErrors('Something went wrong while getting the posts.'));
      dispatch(setLoading(false));
    }
  };
}

export function getPostWithSlug(slug) {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
      const posts = await axios.get(
        `https://epower.ng/wp-json/wp/v2/posts?slug=${slug}`,
      );

      dispatch(setPostWithSlug(posts.data));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setErrors('Something went wrong while getting the posts.'));
      dispatch(setLoading(false));
    }
  };
}
