import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import AddPost from './Components/Post/Post';
import Posts from './Components/PostList/PostList';

function App(){



  const [posts, setPosts] = useState([{userName: "Test", post: "Test text to show in box"}]);

function newPost(post){
  console.log(post)
  let tempPost = [...posts, post];
  setPosts(tempPost);
}



  return (
    <div>
        <NavBar />
      <div className='container-fluid'>
        <div className='border'>
        <AddPost newPost={newPost}/>
        </div>
      </div>
      <div className='border'>
        <Posts parentPosts={posts}/>
      </div>
    </div>
  );

}
export default App;
