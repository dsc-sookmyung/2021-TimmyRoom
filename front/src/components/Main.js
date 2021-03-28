import { useHistory, useLocation } from 'react-router-dom'; 

import Center from './Center';
import Button from './Button';

const Main = () => {
    const history = useHistory(); 

    return (
        <Center>
            <Button onClick={() => history.push('/chat')} style={{ marginBottom: '2rem' }}>CHAT</Button>
            <Button onClick={() => history.push('/need')} style={{ marginBottom: '2rem' }}>NEED</Button>
            <Button onClick={() => history.push('/chatwithdev')}>CHAT WITH DEV</Button>
        </Center>
    );
};

export default Main;
