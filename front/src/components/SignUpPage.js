import styled from 'styled-components';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Center from './Center';
import PhoneForm from './PhoneForm';
import Button from './Button';
import { registerAction } from '../reducers/users';

const InputBox = styled.div`
    display: flex;
    align-items: center;
    width: 30rem;
    margin-bottom: 3rem;
    font-size: 3.6rem;
    color: #ffd300;

    & > input {
        width: 4rem;
        height: 4rem;
        margin-right: 2.7rem;
    }
`;

const SignUpPage = () => {
    const dispatch = useDispatch();

    const [role, setRole] = useState('nondeveloper');
    const onChangeRole = useCallback((e) => {
        if (e.target.checked) {
            setRole('developer');
        } else {
            setRole('nondeveloper');
        }
    }, []);

    const [phone, setPhone] = useState('');
    const onChangePhone = useCallback((e) => {
        setPhone(e.target.value);
    }, []);

    const onSubmitForm = useCallback(() => {
        dispatch(registerAction(role));
    }, [role]);

    return (
        <Center>
            <form onSubmit={onSubmitForm}>
                <InputBox>
                    <input
                        type="checkbox"
                        value={role}
                        onClick={onChangeRole}
                    />
                    개발자입니다.
                </InputBox>
                {/* <PhoneForm phone={phone} onChange={onChangePhone} /> */}
                <Button
                    type="submit"
                    style={{
                        width: '30rem',
                        height: '6rem',
                        fontSize: '3rem',
                    }}
                >
                    회원가입
                </Button>
            </form>
        </Center>
    );
};

export default SignUpPage;
