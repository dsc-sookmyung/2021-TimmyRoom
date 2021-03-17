import { Link } from 'react-router-dom'; 

import Center from './Center'; 
import Button from './Button'; 
import { CategoryTitle } from './style';

const Need = () => {
    return (
        <Center>
            <CategoryTitle>필요해요</CategoryTitle>
            <Link to="/write" style={{ marginBottom: '2rem' }}>
                <Button>글쓰기</Button>
            </Link>
            <Link to="/list">
                <Button>게시글 목록</Button>
            </Link>
        </Center>
    )
}

export default Need; 