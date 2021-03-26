import { useState, useEffect } from 'react'; 
import { useLocation, useHistory } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'; 

import './style.css';
import Center from './Center';
import PostList from './posts/Posts';
import Pagination from './posts/Pagination';
import Button from './Button';
import { HomeFilled, EditFilled } from '@ant-design/icons'; 
import { loadPostsRequestAction } from '../reducers/posts'; 
import { loadUsersRequestAction } from '../reducers/users';

const IconBox = styled.div`
    margin: 0 auto 3rem;;

    & > span{
        display: inline-block; 
        color: #ffdc18;

        & > svg{
            width: 8rem; 
            height: 8rem;

            @media screen and (min-width: 768px){
                width: 10rem; 
                height: 10rem;
            }
        }
    }

    & > span:first-child{
        margin-right: 4rem;

        @media screen and (min-width: 768px){
            margin-right: 8rem;
        }
    }
`;

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
    const [postsPerPage, setPostsPerPage] = useState(10); 

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
        <Center style={{ height: "100%", margin: '8rem auto' }}>
            <IconBox>
                <HomeFilled onClick={() => history.push(`/main`)}/>
                <EditFilled onClick={() => history.push(`${upperLocation}/write`)}/>
            </IconBox>

            <table className="board_list" style={{ marginBottom: '5rem' }}>
                <tr className="first">
                    <th width="10%">번호</th>
                    <th width="50%">제목</th>
                    <th width="20%">작성자</th>
                    <th width="20%">등록일</th>
                </tr>

                {Posts !== null ? (
                    <PostList posts={currentPosts(Posts)} /> 
                ) : <tr>작성된 글이 없습니다.</tr>}
                
            </table>

            {Posts !== null ? (
                <Pagination postsPerPage={postsPerPage} totalPosts={Posts.length} paginate={setCurrentPage} />
            ): null}
        </Center>
    );
};

export default ListPage;