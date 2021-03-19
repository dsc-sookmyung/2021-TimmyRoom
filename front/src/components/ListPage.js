import './style.css';
import Center from './Center';  
import { Link } from 'react-router-dom'; 

const ListPage = () => {
    return(
        <Center>
            <table className="board_list">
                <tr className="first">
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>등록일</th>
                </tr>
            
                 <tr onClick={()=> document.location.href="/view"}> 
                    <td>3</td>
                    <td>글 제목</td>
                    <td>박시연</td>
                    <td>2021.03.15</td>
                </tr>
                <tr onClick={()=> document.location.href="/view"}>
                    <td>2</td>
                    <td>글 제목</td>
                    <td>박시연</td>
                    <td>2021.03.15</td>
                </tr>
                <tr onClick={()=> document.location.href="/view"}>
                    <td>1</td>
                    <td>글 제목</td>
                    <td>박시연</td>
                    <td>2021.03.15</td>
                </tr>
                
            </table>
            <Link to="/write"><a id="gotoWrite">글쓰기</a></Link>
            <div className="paging">
                <ul>
                    <li><a href="">앞</a></li>
                    <li><a href="">1</a></li>
                    <li><a href="">2</a></li>
                    <li><a href="">3</a></li>
                    <li><a href="">뒤</a></li>
                </ul>
            </div>
        </Center>
    );
};
export default ListPage;