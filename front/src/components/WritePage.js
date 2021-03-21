import { useState, useCallback, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 

import './style.css';
import Center from './Center';  
import { addPostRequestAction } from '../reducers/posts';
import { loadUsersRequestAction } from '../reducers/users';

const WritePage = () => {
    const dispatch = useDispatch(); 

    const history = useHistory(); 
    const location = useLocation().pathname; 
    const upperLocation = location.match(/[/]\w+/)[0];

    const { loadUsersDone, Users } = useSelector((state) => state.user);

    const [categoryId, setCategoryId] = useState(null); 
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
        /*
        if(categoryId !== null){
            dispatch(loadUsersRequestAction({ categoryId }));
            if(loadUsersDone){
                console.log(Users); 
            }
        }
        */
    }, [categoryId]); 

    const [title, setTitle] = useState('');
    const onChangeTitle = useCallback((e) => {
        setTitle(e.target.value); 
    }, [title]); 

    const [content, setContent] = useState(''); 
    const onChangeContent = useCallback((e) => {
        setContent(e.target.value); 
    }, [content]);

    const writer = useSelector((state) => state.user.nickname); 

    const onSubmitForm = useCallback(() => {
        dispatch(addPostRequestAction({ categoryId, writer, title, content }));
    }, [categoryId, writer, title, content]);

    return (
        <Center>
            <div className="board_write">
                <form onSubmit={onSubmitForm}>
                    <table>
                        <tr>
                            <th><label htmlFor="title">제목</label></th>
                            <td><input type="text" name="title" id="title" value={title} onChange={onChangeTitle}></input></td>
                        </tr>
                        <tr>
                            <th><label htmlFor="content">내용</label></th>
                            <td><textarea name="content" id="content" value={content} onChange={onChangeContent}></textarea></td>
                        </tr>
                        {/* <tr>								
                            <th>첨부</th>
                            <td><input type="file" name="file" id="file"></input></td>
                        </tr> */}
                    </table>


                    <div className="btn">
                        <button type="submit">확인</button>
                        <button onClick={() => history.push(`${upperLocation}/list`)}>
                            목록으로
                        </button>
                    </div>
                </form>

            </div>
        </Center>
    )
}

export default WritePage; 
