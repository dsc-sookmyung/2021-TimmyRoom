import { useState } from 'react';
import '../style.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNum = []; 
    let totalPage = Math.ceil(totalPosts / postsPerPage); // 전체 페이지 수
    let limit = totalPage;  
    if(limit > 10){
        limit = 10; 
    }
    const [startPage, setStartPage] = useState(1); 

    for(let i = startPage; i < startPage + limit; i++){
        pageNum.push(i); 
    }

    const pages = document.getElementsByClassName('pages');  
    const clickHandler = (e) => {
        if (!e.target.classList.contains("first-page")) {
            if(pageNum.length > 10){
                pages[1].classList.remove("first-page");
            } else{
                pages[0].classList.remove("first-page");
            }
        }

        for (var i = 0; i < pages.length; i++) {
            pages[i].classList.remove("active-page");
        }
        e.target.classList.add("active-page");
    }

    const init= () => {
        for (let i = 0; i < pages.length; i++) {
          pages[i].addEventListener("click", clickHandler);
        }
    }

    init();

    return(
        <div className="paging">
            <ul>
                {pageNum.length > 10 ? (
                    <li className="pages">
                        앞
                    </li>
                ): null}
                {pageNum.map((page, index) => {
                    return(
                    index === 0 ? (
                        <li key={index}
                            className="pages first-page" 
                            onClick={(e) => {
                                paginate(page); 
                            }}
                        >
                            {page}
                        </li>
                    ) :  (
                        <li key={index}
                            className="pages" 
                            onClick={(e) => {
                                paginate(page); 
                            }}
                        >
                            {page}
                        </li>
                    ));
                })}
                {totalPage > 10 && pageNum[pageNum.length - 1] !== totalPage ? (
                    <li className="pages"
                        onClick={() => {
                            setStartPage(startPage + 1)
                        }}
                    >
                        뒤
                    </li>
                ): null}
            </ul>
        </div>
    )
}

export default Pagination; 