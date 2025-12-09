import './App.css';
import PostList from './PostList';
import PostCreate from './PostCreate';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        try {
            // Pöördume Ingressi kaudu Query teenusesse (http://posts.com/posts)
            const res = await axios.get('http://posts.com/posts'); 
            
            // Query teenus tagastab andmed kujul { 'postId': { id, title, comments: [...] } }
            setPosts(res.data);
        } catch (err) {
            console.error('Error fetching posts from Query service:', err);
        }
    };
  


    const refreshAll = async () => {
        await fetchPosts();
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
      <PostList posts={posts} refreshPosts={refreshAll} />
    </div>
  )
};

export default App;