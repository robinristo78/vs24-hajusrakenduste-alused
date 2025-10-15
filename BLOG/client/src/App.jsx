import './App.css';
import PostList from './PostList';
import PostCreate from './PostCreate';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

// Tasks: based on 'https://docs.google.com/document/d/19N8Tf4lJBZBghFbLE7Ajkz3nLBq447ZF7Y6C0qJUFCI/edit?tab=t.0'
// cors module'i kaudu peab saama eksisteerida 2 backend'i: comments & posts
// põhimõtteliselt peab lahutama 'näidis rakenduse' pooleks.

const App = () => {

  return (
    <div className='container'>
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  )
};

export default App;