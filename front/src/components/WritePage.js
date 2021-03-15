import './style.css';
import Center from './Center';  
import { Link } from 'react-router-dom'; 

const WritePage = () => {
    return (
        <Center>
            <div className="board_write">
                <form action="#" method="post">
                    <table>
                        <tr>
                            <th><label for="title">제목</label></th>
                            <td><input type="text" name="title" id="rtitle"></input></td>
                        </tr>
                        <tr>
                            <th><label for="content">내용</label></th>
                            <td><textarea name="content" id="content"></textarea></td>
                        </tr>
                        <tr>								
                            <th>첨부</th>
                            <td><input type="file" name="file" id="file"></input></td>
                        </tr>
                    </table>


                    <div className="btn">
                        <button type="submit">확인</button>
                        <Link to="/list">
                            <a>목록으로</a>
                        </Link>
                    </div>
                </form>

            </div>
        </Center>
    )
}

export default WritePage; 
