import { useHistory } from 'react-router-dom';

import Center from './Center';
import Button from './Button';

const LogOutMain = () => {
    const history = useHistory(); 

    return (
        <Center>
            <Button onClick={() => history.push('/login')} style={{ marginBottom: '2rem' }}>SIGN IN</Button>
            <Button onClick={() => history.push('/signup')}>SIGN UP</Button>
        </Center>
    );
};

export default LogOutMain;
