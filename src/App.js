import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import PostList from './Components/PostList/PostList';


function App(){



  const [posts, setPosts] = useState([{name: "Test", thoughts: "Test text to show in box"}]);

function newPost(post){
  let tempPost = [...posts, post];
  setPosts(tempPost);



  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div className='container-fluid'>
        <div className='edge'>
          <PostList newPost={newPost}/>
        </div>
      </div>
    </div>
  );
}
}
export default App;
