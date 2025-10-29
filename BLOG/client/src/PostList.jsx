import { useState, useEffect } from "react";
import axios from "axios";
import CommentsList from "./CommentsList";
import CommentCreate from "./CommentCreate";

const PostList = ({ posts, comments, refreshPosts }) => {


    // console.log(posts);

    // const postsForRender = posts.map(post => (
    //     <div className="card" style={{ width: '100%', marginBottom: '20px' }} key={post.id}>
    //         <div className="card-body">
    //             <h3>{post.title}</h3>
    //             <CommentsList postid={post.id} comments={comments}  />
    //             <CommentCreate postid={post.id} refreshPosts={refreshPosts} />
    //         </div>
    //     </div>
    // ));

    const postsForRender = Object.values(posts).map(post => (
        <div className="card" style={{ flex: '1 1 30%', maxWidth: '300px', marginBottom: '20px' }} key={post.id}>
            <div className="card-body d-flex flex-column">
                <h3>{post.title}</h3>
                <hr/>
                <div style={{ flex: 1 }}>
                    <CommentsList postid={post.id} comments={post.comments}  />
                </div>
                <CommentCreate postid={post.id} refreshPosts={refreshPosts} />
            </div>
        </div>
    ));

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between gap-3">
            {postsForRender}
        </div>
    )
};

export default PostList;