import '../style.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNum = []; 
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNum.push(i); 
    }

    return(
        <div className="paging">
            <ul>
                <li>앞</li>
                {pageNum.map((page, index) => {
                    return(
                        <li key={index} onCLick={paginate(page)}>{page}</li>
                    )
                })}
                <li>뒤</li>
            </ul>
        </div>
    )
}

export default Pagination; 