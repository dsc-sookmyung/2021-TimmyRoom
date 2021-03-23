const PostList = ({ posts }) => {
    return(
        posts.map((post) => {
            return(
                // <tr key={index}>
                //     <td>{post.id}</td>
                //     <td>{post.title}</td>
                //     <td>{post.writer}</td>
                //     <td>{post.date}</td>
                // </tr>
                <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.nickname}</td>
                    <td>{post.role}</td>
                    <td>{post.phone}</td>
                </tr>
            );
        })
    ); 
}

export default PostList; 