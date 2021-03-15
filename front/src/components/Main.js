import { Link } from 'react-router-dom'; 

import Center from './Center';
import Button from './Button';

const Main = () => {
    return (
        <Center>
            <Link to="/chat" style={{ marginBottom: '2rem' }}>
                <Button>잡담해요</Button>
            </Link>
            <Link to="/need" style={{ marginBottom: '2rem' }}>
                <Button>필요해요</Button>
            </Link>
            <Link to="/chatwithdev" style={{ marginBottom: '2rem' }}>
                <Button>개발자와 소통해요</Button>
            </Link>
        </Center>
    );
};

export default Main;
