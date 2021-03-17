import './style.css';
import Center from './Center';  
import { Link } from 'react-router-dom'; 

const ViewPage = () => {
    return(
        <Center>
            <div className="board_contents">
                <table className="ctable">
                    <tr>
                        <th>제목</th>
                        <td>제목입니다</td>
                        <th>작성자</th>
                        <td>박시연</td>
                    </tr>
                    <tr>
                        <th>작성일</th>
                        <td>2020.03.16</td>
                        <th>조회수</th>
                        <td>1</td>
                    </tr>

                    <tr className="con">
                        <td colSpan="4">
                            <p>내용입니다</p>
                        </td>
                    </tr>
                </table>

                <h2 class="co_title">댓글쓰기</h2>
				<table class="comment">
					<tr>
						<td><textarea name="comment" id="comment"></textarea></td>
						<td><button type="submit">등록</button></td>
					</tr>
				</table>
                <Link to="/list">
                    <a>목록으로</a>
                </Link>
                <table class="next">
						<tr>
							<th>다음글</th>
							<td onClick={()=> document.location.href="/view"}>다음 글 입니다</td>
						</tr>
				</table>
            </div>
        </Center>
    );
};

export default ViewPage;