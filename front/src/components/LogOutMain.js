import { Link } from 'react-router-dom';

import Center from './Center';
import Button from './Button';

const LogOutMain = () => {
    return (
        <Center>
            <Link to="/login" style={{ marginBottom: '2rem' }}>
                <Button>로그인</Button>
            </Link>
            <Link to="/signup">
                <Button>회원가입</Button>
            </Link>
        </Center>
    );
};

export default LogOutMain;
