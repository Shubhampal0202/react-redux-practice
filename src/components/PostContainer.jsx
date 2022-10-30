import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/posts/postAction'
function PostContainer(props) {
    const { loading, posts, error, fetchPost } = props;
    // console.log("props ", props);
    return (
        <div>
            <h2>Post Container</h2>
            <button onClick={fetchPost}>Fetch Post</button>
            {
                posts &&
                posts.map((post) => {
                    return (
                        <div key={post.id} style={{
                            padding: 16,
                            borderRadius: 6,
                            boxShadow: "0px 2px 8px #666",
                            width: "50%",
                            margin: "24px auto",
                        }}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        loading: state.posts.loading, posts: state.posts.posts, error: state.posts.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost: () => { dispatch(fetchPosts) }
        // fetchPost: () => { dispatch(fetchPosts()) } ck wala method
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)