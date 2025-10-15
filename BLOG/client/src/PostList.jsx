import { useState, useEffect } from "react";
import axios from "axios";
import CommentsList from "./CommentsList";
import CommentCreate from "./CommentCreate";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async() => {
            try {
                const res = await axios.get('http://localhost:5000/posts');
                const posts = res.data;
                setPosts(posts);
            }
            catch (error) {
                console.error(error);
            }
        };
        fetchPosts();
    }, []);

    console.log(posts);

    const postsForRender = posts.map(post => (
        <div className="card" style={{ width: '100%', marginBottom: '20px' }} key={post.id}>
            <div className="card-body">
                <h3>{post.title}</h3>
                <CommentsList postid={post.id} />
                <CommentCreate postid={post.id} />
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