import './PostList.css'
import React, { useState } from 'react';




const Posts = (props) => {
    const [like, setLike] = useState('inactive')
    const [dislike, setDislike] = useState('inactive')

    function handleLike() {
        if (like === 'inactive') {
            setLike('active')
        }
        if (dislike === 'active') {
            setDislike('inactive')
        }
    }

    function handleDislike() {
        if (dislike === 'inactive') {
            setDislike('active')
        }
        if (like === 'active') {
            setLike('inactive')
        }
    }
    
    console.log(props)
    return (
        <div className="list-group">
            {props.parentPosts.map((posts,index) => {
                return(
                    <section key={index} className='container-one'>
                        <div>
                            <p className="posts"><h3>{posts.userName}</h3>                            
                            </p>
                        </div>
                        <div>
                            <p className="posts"><h3>{posts.post}</h3>
                            </p>
                        </div>
                        <div>
                            <button className='like' onClick={handleLike}>Like</button>
                            <button className='dislike' onClick={handleDislike}>Dislike</button>
                        </div>
                    </section>
                )

            })}
        </div>
    )
}


export default Posts;