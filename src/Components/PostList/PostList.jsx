
const Posts = (props) => {
    return (
        <div className="list-group">
            {props.parentPosts.map((entry,index))}
        </div>
    )
}