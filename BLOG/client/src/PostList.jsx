import { useState, useEffect } from "react";
import axios from "axios";
import CommentsList from "./CommentsList";
import CommentCreate from "./CommentCreate";

const PostList = ({ posts, comments, refreshPosts }) => {


    // console.log(posts);

    const postsForRender = posts.map(post => (
        <div className="card" style={{ width: '100%', marginBottom: '20px' }} key={post.id}>
            <div className="card-body">
                <h3>{post.title}</h3>
                <CommentsList postid={post.id} comments={comments}  />
                <CommentCreate postid={post.id} refreshPosts={refreshPosts} />
            </div>
        </div>
    ));

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {postsForRender}
        </div>
    )
};

export default PostList;