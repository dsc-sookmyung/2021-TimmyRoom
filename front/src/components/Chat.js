import { useHistory } from 'react-router-dom'; 

import Center from './Center'; 
import Button from './Button'; 
import { CategoryTitle } from './style';

const Chat = () => {
    const history = useHistory(); 

    return (
        <Center>
            <CategoryTitle>CHAT</CategoryTitle>
            <Button onClick={() => history.push('/chat/write')} style={{ marginBottom: '2rem' }}>WRITE</Button>
            <Button onClick={() => history.push('/chat/list')}>POST LIST</Button>
        </Center>
    )
}

export default Chat; 