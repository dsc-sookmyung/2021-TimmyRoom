import styled from 'styled-components';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './style.css';

import Center from './Center';
import { registerUser } from '../reducers/users';
import ErrorMessage from './ErrorMessage';

const ListPage = () => {
    return(
        <Center>
            <table className="board_list">
                <tr className="first">
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>등록일</th>
                    <th>조회수</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td><a href="">글 제목 입니다</a></td>
                    <td>박시연</td>
                    <td>2021.03.15</td>
                    <td>1</td>
                </tr>
            </table>
            <a id="gotoWrite" href="./WritePage.js">글쓰기</a>
            <div className="paging">
            <ul>
                <li><a href="">prev</a></li>
                <li><a href="">1</a></li>
                <li><a href="">2</a></li>
                <li><a href="">next</a></li>
            </ul>
            </div>
        </Center>
    );
};
export default ListPage;