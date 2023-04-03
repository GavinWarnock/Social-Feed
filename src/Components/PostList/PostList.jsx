
const Posts = (props) => {
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
                    </section>
                )

            })}
        </div>
    )
}

export default Posts;