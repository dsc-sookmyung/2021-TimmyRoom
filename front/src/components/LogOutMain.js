import { Link } from 'react-router-dom';

import Center from './Center';
import Button from './Button';

const LogOutMain = () => {
    return (
        <Center>
            <Link to="/login" aria-label="로그인 페이지로 이동" style={{ marginBottom: '2rem' }}>
                <Button>로그인</Button>
            </Link>
            <Link to="/signup" aria-label="회원가입 페이지로 이동">
                <Button>회원가입</Button>
            </Link>
        </Center>
    );
};

export default LogOutMain;
