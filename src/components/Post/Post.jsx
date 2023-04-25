import './Post.css';

function Post({data}) {
    return (
        <div className = "post">
            <div className = "text-part">
                <h3>{data.title}</h3>
                <p className = "post-content" dangerouslySetInnerHTML={data.content}/>
                <p classNmae = "post-publish-time">Published {data.time} ago by {data.name}</p>
            </div>
            <div className = "picture-part">
                <div className ="the-picture">
                    <div className = "the-1-x"></div>
                    <div className = "the-2-x"></div>
                </div>
            </div>
        </div>
    )
}

export default Post;