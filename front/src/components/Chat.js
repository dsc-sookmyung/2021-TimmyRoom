import { Link } from 'react-router-dom'; 

import Center from './Center'; 
import Button from './Button'; 

const Chat = () => {
    return (
        <Center>
            <Link to="/write">
                <Button>글쓰기</Button>
            </Link>
        </Center>
    )
}

export default Chat; 