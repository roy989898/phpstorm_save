import {ActionContext} from 'vuex';
import {BlogState} from '@/store/Module/blog/blogState';
import {RootState} from '@/store/RootState';
import {Blog} from '@/Classes/Blog';

import {getStoreAccessors} from 'vuex-typescript';

type BlogContext = ActionContext<BlogState, RootState>;

export const blog = {
    namespaced: true,

    state: {
        blogs: [],
    },
    getters: {
        getBlogs(state: BlogState) {
            return state.blogs;
        },
    },

    mutations: {

        addBlog(state: BlogState, blog: Blog) {
            state.blogs.push(blog);
        },
        addBlogs(state: BlogState, blogs: Blog[]) {
            state.blogs.push(...blogs);
        },


    },

    actions: {
        // todo
        async addBlogAction(context: BlogContext, blog: Blog) {
            commitAddBlog(context, blog);
        },

        async addBlogsAction(context: BlogContext, blogs: Blog[]) {
            commitAddBlogs(context, blogs);
        },

    },
};

const {commit, read, dispatch} =
    getStoreAccessors<BlogState, RootState>('blog');

const getters = blog.getters;


export const readAllBlogs = read(getters.getBlogs);


const mutations = blog.mutations;


export const commitAddBlog = commit(mutations.addBlog);
export const commitAddBlogs = commit(mutations.addBlogs);

const actions = blog.actions;


export const dispatchAddBlog = dispatch(actions.addBlogAction);
export const dispatchAddBlogs = dispatch(actions.addBlogsAction);