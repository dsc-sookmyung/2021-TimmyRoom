 import { Link, useHistory, useLocation } from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './style.css';
import Center from './Center'; 

const ViewPage = () => {
    const history = useHistory(); 
    const location = useLocation();
    const pathName = location.pathname; // pathName에서 post_id를 가져올 수 있음 
    const postId = pathName.match(/([0-9])\w/g)[0]; 

    const dispatch = useDispatch(); 
    useEffect(() => {
        // dispatch(loadPostRequestAction({ postId })); 
    }, [postId]); 

    const post = useSelector((state) => state.post.viewingPost); 
    const [category, setCategory] = useState(null);
    useEffect(() => {
        switch(post.categoryId){
            case 1:
                setCategory('chat'); 
                break; 
            case 2:
                setCategory('need'); 
                break; 
            case 3:
                setCategory('chatwithdev'); 
                break; 
            default:
                setCategory(null); 
        }
    }, [post]); 

    return(
        <Center>
            {post !== null ? (
                <div className="board_contents">
                    <table className="ctable">
                        <tr>
                            <th colSpan="1">제목</th>
                            <td colSpan="3">{post.title}</td>
                        </tr>
                        <tr>
                            <th colSpan="1">작성자</th>
                            <td colSpan="1">{post.writer}</td>
                            <th colSpan="1">작성일</th>
                            <td colSpan="1">{post.date}</td>
                        </tr>

                        <tr className="con">
                            <td colSpan="4">
                                <p>{post.content}</p>
                            </td>
                        </tr>
                    </table>

                    <h2 className="co_title">댓글쓰기</h2>
				    <table className="comment">
					    <tr>
						    <td><textarea name="comment" id="comment"></textarea></td>
						    <td><button type="submit">등록</button></td>
					    </tr>
				    </table>
                    <button onClick={() => history.push(`/${category}/list`)}>
                        목록으로
                    </button>
                    <table className="next">
						<tr>
							<th>다음글</th>
							<td onClick={()=> history.push(``)}>다음 글 입니다</td>
						</tr>
				    </table>
                </div>
            ) : (
                <div className="board_contents" 
                    style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        height: '78rem', 
                        fontSize: '3rem', 
                    }}>
                    글을 불러오지 못했습니다. 
                </div>
            )}
        </Center>
    );
};

export default ViewPage;