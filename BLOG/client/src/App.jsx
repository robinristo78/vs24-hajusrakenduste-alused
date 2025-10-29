import './App.css';
import PostList from './PostList';
import PostCreate from './PostCreate';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [posts, setPosts] = useState({});
    const [comments, setComments] = useState([]);

    const fetchPosts = async () => {
        try {
            const res = await axios.get('http://localhost:5002/posts');
            setPosts(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchComments = async () => {
      try {
        // First, get all posts so we know their IDs
        const postsRes = await axios.get('http://localhost:5000/posts');
        const posts = postsRes.data;

        // Fetch comments for each post in parallel
        const commentsPromises = posts.map(async (post) => {
          const res = await axios.get(`http://localhost:5001/posts/${post.id}/comments`);
          // Attach postId to each comment so we can filter later
          return res.data.map(comment => ({ ...comment, postId: post.id }));
        });

        // Wait for all comment requests to finish
        const commentsArrays = await Promise.all(commentsPromises);

        // Flatten the array of arrays into a single list of comments
        const allComments = commentsArrays.flat();

        console.log('Fetched comments:', allComments);
        setComments(allComments);
      } catch (err) {
        console.error('Error fetching comments:', err);
      }
    };


    const refreshAll = async () => {
        await fetchPosts();
        // await fetchComments();
    };

    useEffect(() => {
        refreshAll();
    }, []);


  return (
    <div className='container'>
      <h1>Create Post</h1>
      <PostCreate refreshPosts={refreshAll} />
      <hr />
      <h1>Posts</h1>
      <PostList posts={posts} comments={comments} refreshPosts={refreshAll} />
    </div>
  )
};

export default App;