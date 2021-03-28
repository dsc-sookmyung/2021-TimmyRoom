import { useHistory } from 'react-router-dom';

import Center from './Center';
import Button from './Button';

const LogOutMain = () => {
    const history = useHistory(); 

    return (
        <Center>
            <Button onClick={() => history.push('/login')} style={{ marginBottom: '2rem' }}>로그인하러 가기</Button>
            <Button onClick={() => history.push('/signup')}>회원가입하러 가기</Button>
        </Center>
    );
};

export default LogOutMain;
