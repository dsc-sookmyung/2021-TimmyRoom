import { useHistory } from 'react-router-dom'; 

import Center from './Center'; 
import Button from './Button'; 
import { CategoryTitle } from './style';

const Need = () => {
    const history = useHistory();

    return (
        <Center>
            <CategoryTitle>필요해요</CategoryTitle>
            <Button onClick={() => history.push('/write')} style={{ marginBottom: '2rem' }}>글쓰기</Button>
            <Button onClick={() => history.push('/list')}>게시글 목록</Button>
        </Center>
    )
}

export default Need; 