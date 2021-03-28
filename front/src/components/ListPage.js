import { useState, useEffect } from 'react'; 
import { useLocation, useHistory } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';

import './style.css';
import Center from './Center';
import PostList from './posts/Posts';
import Pagination from './posts/Pagination';
import { IconBox } from './style';
import { HomeFilled, EditFilled } from '@ant-design/icons'; 
import { loadUsersRequestAction } from '../reducers/users';

const ListPage = () => {
    const dispatch = useDispatch(); 

    const history = useHistory(); 
    const location = useLocation().pathname; // ex) /chat/list 
    const upperLocation = location.match(/[/]\w+/)[0]; // ex) /chat

    // categoryId가 무엇이냐에 따라 받아오는 게시물 data가 달라짐
    const [categoryId, setCategoryId] = useState(null); 

    const { loadUsersDone } = useSelector((state) => state.user); 
    const Posts = useSelector((state) => state.user.Users); 
    

    const [currentPage, setCurrentPage] = useState(1); 
    const [postsPerPage, setPostsPerPage] = useState(3); 

    const lastIndex = currentPage * postsPerPage; 
    const firstIndex = lastIndex - postsPerPage; 
    const currentPosts = (posts) => {
        return posts.slice(firstIndex, lastIndex); 
    }

    useEffect(() => {
        switch(upperLocation){
            case '/chat':
                setCategoryId(1);
                break;
            case '/need':
                setCategoryId(2); 
                break;
            case '/chatwithdev':
                setCategoryId(3); 
                break;
            default:
                setCategoryId(null); 
        }

        if(categoryId !== null){ 
            dispatch(loadUsersRequestAction()); 
        }
    }, [categoryId, loadUsersDone]);

    return(
        <Center style={{ height: "100%", margin: '8rem auto' }}>
            <IconBox>
                <HomeFilled onClick={() => history.push(`/main`)}/>
                <EditFilled onClick={() => history.push(`${upperLocation}/write`)}/>
            </IconBox>

            <table className="board_list" style={{ marginBottom: '5rem' }}>
                <tr className="first">
                    <th width="10%">ID</th>
                    <th width="50%">CONTENT</th>
                    <th width="20%">WRITER</th>
                    <th width="20%">DATE</th>
                </tr>

                {Posts !== null ? (
                    <PostList posts={currentPosts(Posts)} /> 
                ) : <tr>No Content.</tr>}
                
            </table>

            {Posts !== null ? (
                <Pagination postsPerPage={postsPerPage} totalPosts={Posts.length} paginate={setCurrentPage} />
            ): null}
        </Center>
    );
};

export default ListPage;