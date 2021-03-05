import { Link } from 'react-router-dom';

import Center from './Center';
import Button from './Button';

const LogOutMain = () => {
    return (
        <Center>
            <Link to="/login" style={{ marginBottom: '2rem' }}>
                <Button>로그인하러 가기</Button>
            </Link>
            <Link to="/signup">
                <Button>회원가입하러 가기</Button>
            </Link>
        </Center>
    );
};

export default LogOutMain;
