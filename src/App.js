import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';



function App() {
  
  const [posts, setPosts] = useState([{name: "Test", thoughts: "Test text to show in box"}])

  return (
    <div>
      <header>
        <NavBar />
      </header>
    </div>
  );
}

export default App;
