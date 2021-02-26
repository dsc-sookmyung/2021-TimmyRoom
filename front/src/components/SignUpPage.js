import styled from 'styled-components';
import { useState } from 'react';

import Center from './Center';
import PhoneForm from './PhoneForm';
import Button from './Button';

const InputBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
    font-size: 3.6rem;
    color: #ffd300;

    & > input {
        width: 4rem;
        height: 4rem;
        margin-right: 2rem;
    }
`;

const SignUpPage = () => {
    const [role, setRole] = useState('developer');

    return (
        <Center>
            <InputBox>
                <input type="checkbox" value={role} />
                개발자입니다.
            </InputBox>
            <PhoneForm />
            <Button
                style={{ width: '26rem', height: '5rem', fontSize: '3rem' }}
            >
                회원가입
            </Button>
        </Center>
    );
};

export default SignUpPage;
