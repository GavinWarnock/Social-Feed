import React, { useState } from 'react';

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
        // props.newPost(newPost)
    }

    return (
        <form onSubmit={handleSubmit} classname='form grid'>
            <div classname='form group' >
                <label for='username'>User Name: </label>
                <input type="text" class='form-control' id='username' placeholder='User Name' value={userName} onChange={(event) => setUserName(event.target.value)} />
            </div>
            <div className='form group'>
                <label for='post'>Say what you want!</label>
                <textarea class='form-control' id='post' rows='5' value={post} onChange={(event) => setPost(event.target.value)}/>
            </div>
            <button type='submit' className='btn btn-primary' style={{'margin-top': '1em', 'color': "orange"}}>Submit Post</button>
        </form>
    )
}

export default AddPost