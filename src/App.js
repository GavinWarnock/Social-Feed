import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import AddPost from './Components/PostList/PostList';


function App(){



  const [posts, setPosts] = useState([{name: "Test", thoughts: "Test text to show in box"}]);

function newPost(post){
  let tempPost = [...posts, post];
  setPosts(tempPost);
}



  return (
    <div>
        <NavBar />
      <div className='container-fluid'>
        <div className='edge'>
          <AddPost newPost={newPost}/>
        </div>
      </div>
    </div>
  );

}
export default App;
