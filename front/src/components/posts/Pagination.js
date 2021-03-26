import { useState } from 'react';
import styled from 'styled-components'; 

import '../style.css';
import Button from '../Button';

const PageBtnBox = styled.div`
    & > button{
        display: inline-block; 
        width: 15rem; 
        height: 5rem; 
        font-size: 2rem;

        @media screen and (min-width: 768px){
            width: 30rem; 
            height: 10rem; 
            font-size: 4rem;
        }
    } 

    & > button:nth-child(2){
        margin-left: 1.5rem; 

        @media screen and (min-width: 768px){
            margin-left: 5rem;
        }
    }
`; 

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const totalPage = Math.ceil(totalPosts / postsPerPage); // 전체 페이지 수
    const [startPage, setStartPage] = useState(1); 

    return(
        <PageBtnBox>
                {startPage > 1 ? (
                    <Button 
                        onClick={() => {
                            setStartPage(startPage - 1);
                            paginate(startPage - 1);
                        }}
                    >
                        이전 페이지로
                    </Button>
                ): null}
                {startPage < totalPage ? (
                    <Button 
                        onClick={() => {
                            setStartPage(startPage + 1);
                            paginate(startPage + 1);
                        }}
                    >
                        다음 페이지로
                    </Button>
                ): null}
        </PageBtnBox>
    )
}

export default Pagination; 