import React, { useState } from 'react';
import "./Post.css"

const AddPost = (props) => {
    console.log(props)
    const [userName, setUserName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            userName: userName,
            post: post
        };
        props.newPost(newPost);

        setUserName('');
        setPost('')
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='input-box' >
                <label for='username' className='text'>User Name: </label>
                <input type="text" class='form-control' id='username' placeholder='User Name' value={userName} onChange={(event) => setUserName(event.target.value)} />
            </div>
            <div className='input-box'>
                <label for='post' className='text'>Say what you want!</label>
                <textarea class='form-control' id='post' rows='5' value={post} onChange={(event) => setPost(event.target.value)}/>
            </div>
            <button type='submit' className='btn btn-primary' style={{'margin-top': '1em', 'color': "teal"}}>Submit Post</button>
        </form>
    )
}

export default AddPost