import { useState, useEffect } from 'react'; 
import { useLocation, useHistory } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';

import './style.css';
import Center from './Center';
import PostList from './posts/Posts';
import Pagination from './posts/Pagination';
import Button from './Button';
import { loadPostsRequestAction } from '../reducers/posts'; 
import { loadUsersRequestAction } from '../reducers/users';

const ListPage = () => {
    const dispatch = useDispatch(); 

    const history = useHistory(); 
    const location = useLocation().pathname; // ex) /chat/list 
    const upperLocation = location.match(/[/]\w+/)[0]; // ex) /chat

    // categoryId가 무엇이냐에 따라 받아오는 게시물 data가 달라짐
    const [categoryId, setCategoryId] = useState(null); 

    const { loadPostsDone } = useSelector((state) => state.post); 
    // const Posts = useSelector((state) => state.post.Posts).reverse(); // post 최신순
    const { loadUsersDone } = useSelector((state) => state.user); 
    const Posts = useSelector((state) => state.user.Users); 
    

    const [currentPage, setCurrentPage] = useState(1); 
    const [postsPerPage, setPostsPerPage] = useState(7); 

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
            // dispatch(loadPostsRequestAction({ categoryId })); 
            dispatch(loadUsersRequestAction()); 
            // if(loadPostsDone){
            //     console.log(Posts); 
            // }
            // if(loadUsersDone){
            //     console.log(Posts);
            // }
        }
    }, [categoryId, loadUsersDone]);

    return(
        <Center>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '65rem' }}>
                <Button 
                    onClick={() => history.push(`/main`)}
                    style={{ display: 'inline-block', width: '30rem', height: '10rem', marginBottom: '5rem' }}>
                    메인으로
                </Button>
                <Button 
                    onClick={() => history.push(`${upperLocation}/write`)}
                    style={{ display: 'inline-block', width: '30rem', height: '10rem', marginBottom: '5rem' }}>
                    글쓰기
                </Button>
            </div>

            <table className="board_list" style={{ marginBottom: '5rem' }}>
                <tr className="first">
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>등록일</th>
                </tr>

                {Posts !== null ? (
                    <PostList posts={currentPosts(Posts)} /> 
                ) : <tr>작성된 글이 없습니다.</tr>}
                
            </table>

            {/* <Button 
                onClick={() => history.push(`${upperLocation}/write`)}
                style={{ width: '20rem', height: '10rem', marginBottom: '10rem' }}>
                글쓰기
            </Button> */}

            {Posts !== null ? (
                <Pagination postsPerPage={postsPerPage} totalPosts={Posts.length} paginate={setCurrentPage} />
            ): <div></div>}
        </Center>
    );
};
export default ListPage;