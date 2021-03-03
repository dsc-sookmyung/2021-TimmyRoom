import styled from 'styled-components';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import Center from './Center';
import Button from './Button';
import { registerAction } from '../reducers/users';
import ErrorMessage from './ErrorMessage';

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
    const getUserApi = async () => {
        return axios.get('http://localhost:8080/user');
    };
    getUserApi();

    const dispatch = useDispatch();

    const [role, setRole] = useState('nondeveloper');
    const onChangeRole = useCallback(
        (e) => {
            if (e.target.checked) {
                setRole('developer');
            } else {
                setRole('nondeveloper');
            }
        },
        [role],
    );

    const [phone, setPhone] = useState('');
    const onChangePhone = useCallback(
        (e) => {
            setPhone(e.target.value);
        },
        [phone],
    );

    // 이미 등록된 사용자 혹은 전화번호인지 확인
    const [registered, setRegistered] = useState(false);

    const checkRegistered = () => {
        // 등록된 사용자인지 확인
        // 예를 들어, 등록된 사용자다.
        setRegistered(true);
    };

    const [registerError, setRegisterError] = useState(false);

    const onSubmitForm = useCallback(() => {
        if (registered) {
            return setRegisterError(true);
        }
        dispatch(registerAction({ role, phone }));
    }, [role, phone]);

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
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '30rem',
                        marginBottom: '3rem',
                    }}
                >
                    <span
                        style={{
                            display: 'inline-block',
                            marginBottom: '0.5rem',
                            fontSize: '2rem',
                            color: '#ffd300',
                        }}
                    >
                        전화번호 (XXX-XXXX-XXXX)
                    </span>
                    <input
                        type="text"
                        value={phone}
                        onChange={onChangePhone}
                        placeholder="전화번호를 입력해주세요."
                        pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                        maxLength="13"
                        title="XXX-XXXX-XXXX 형식으로 입력해주세요."
                        style={{
                            height: '5rem',
                            fontSize: '2.4rem',
                        }}
                    />
                    {registerError && (
                        <ErrorMessage>이미 등록된 전화번호입니다.</ErrorMessage>
                    )}
                </div>
                <Button
                    type="submit"
                    onClick={checkRegistered}
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
