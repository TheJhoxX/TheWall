
import './Posts.css'
import Post from './Post'

function Posts(args) {
    const { posts } = args
    return (
        <div className='contenedor-posts'>
        {posts.map((x) => (
            <Post key={x.id} elemento={x}/>
        ))}
        </div>
    );
}
  
export default Posts;
  