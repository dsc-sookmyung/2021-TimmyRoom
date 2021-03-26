import { useHistory } from "react-router";

const PostList = ({ posts }) => {
    const history = useHistory(); 

    return(
        posts.map((post) => {
            return(
                // <tr key={index}>
                //     <td>{post.id}</td>
                //     <td>{post.title}</td>
                //     <td>{post.writer}</td>
                //     <td>{post.date}</td>
                // </tr>
                <tr key={post.id} onClick={() => history.push(`/view/${post.id}`)}>
                    <td width="10%">{post.id}</td>
                    <td width="50%">{post.nickname}</td>
                    <td width="20%">{post.role}</td>
                    <td width="20%">{post.phone}</td>
                </tr>
            );
        })
    ); 
}

export default PostList; 