import { useState } from 'react';
import styled from 'styled-components'; 

import '../style.css';
import Button from '../Button';

const PageBtnBox = styled.div`
    & > button:nth-child(2){
        margin-left: 5rem; 
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
                        style={{ display: 'inline-block', width: '30rem', height: '10rem' }}
                    >
                        앞
                    </Button>
                ): null}
                {startPage < totalPage ? (
                    <Button 
                        onClick={() => {
                            setStartPage(startPage + 1);
                            paginate(startPage + 1);
                        }}
                        style={{ display: 'inline-block', width: '30rem', height: '10rem' }}
                    >
                        뒤
                    </Button>
                ): null}
        </PageBtnBox>
    )
}

export default Pagination; 