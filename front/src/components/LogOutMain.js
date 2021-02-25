import { Router } from 'react-router-dom';

import Center from './Center';
import Button from './Button';

const LogOutMain = ({ match }) => {
    return (
        <Center>
            <Button>로그인</Button>
            <Button>회원가입</Button>
        </Center>
    );
};

export default LogOutMain;
