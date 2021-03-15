import styled from 'styled-components';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './style.css';

import Center from './Center';
import { registerUser } from '../reducers/users';
import ErrorMessage from './ErrorMessage';

const WritePage = () => {
    return(
        <Center>
            <div className="board_write">
                <form action="#" method="post" enctype="multipart/form-data">
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
                            <th>첨부파일</th>
							<td><input type="file" name="file" id="file"></input></td>
						</tr>
					</table>

					<div className="btn">
						<button type="submit">확인</button>
						<a href="">목록으로</a>
					</div>
				</form>

            </div>
        </Center>
    );
};
export default WritePage;