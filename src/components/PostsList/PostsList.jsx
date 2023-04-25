import Post from '../Post/Post';
import './PostsList.css';

const postsData = [
    {
        id: 0,
        title: "Blog post #1",
        content: {__html: `
            My <span className = "toBold">first blog post</span> 
            is all about my <span className = "toRed">blog post</span> 
            and how to write a new post in my<br/>
            blog, you can find it <a href="url">here</a>.
            `},
        time: "1 days",
        name: "Isarel"
    }, 
    {
        id: 1,
        title: "Blog post #2",
        content: {__html: `
            My <span className = "toBold">second blog post</span> 
            is all about my blog post.
            `},
        time: "2 days",
        name: "Joe"
    }, 
    {
        id: 2,
        title: "Blog post #3",
        content: {__html:`
            My <span className = "toBold">third blog post</span> 
            is all about my blog post.
            `},
        time: "3 days",
        name: "Israel"
    }
];

function PostsList() {
    return (
        <div className = "all-posts">
            <h1>This is my blog</h1>
            {
                postsData.map((post) => <Post key={post.id} data={post}/>)
            }       
        </div> 
    )
}

export default PostsList;