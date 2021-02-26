import styled from 'styled-components';
import { useState } from 'react';

import Center from './Center';
import PhoneForm from './PhoneForm';
import Button from './Button';

const InputBox = styled.div`
    display: flex;
    align-items: center;
    width: 30rem;
    margin-bottom: 3rem;
    font-size: 3.6rem;
    color: #ffd300;

    & > input {
        width: 3rem;
        height: 3rem;
        margin-right: 2.7rem;
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
                style={{
                    width: '30rem',
                    height: '6rem',
                    fontSize: '3rem',
                }}
            >
                회원가입
            </Button>
        </Center>
    );
};

export default SignUpPage;
