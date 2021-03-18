import { useHistory } from 'react-router-dom'; 

import Center from './Center';
import Button from './Button';

const Main = () => {
    const history = useHistory(); 

    return (
        <Center>
            <Button onClick={() => history.push('/chat')} style={{ marginBottom: '2rem' }}>잡담해요</Button>
            <Button onClick={() => history.push('/need')} style={{ marginBottom: '2rem' }}>필요해요</Button>
            <Button onClick={() => history.push('/chatwithdev')}>개발자와 소통해요</Button>
        </Center>
    );
};

export default Main;
