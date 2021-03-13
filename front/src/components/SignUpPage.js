import styled from 'styled-components';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import Center from './Center';
import Button from './Button';
import { registerUser } from '../reducers/users';
import ErrorMessage from './ErrorMessage';

const InputBox = styled.div`
    display: flex;
    align-items: center;
    width: 30rem;
    margin-bottom: 3rem;

    @media screen and (min-width: 768px) {
        width: 50rem;
    }

    & > input {
        width: 4rem;
        height: 4rem;
        margin-right: 2.7rem;
    }

    & > label {
        font-size: 2.1rem;
        color: #ffd300;

        @media screen and (min-width: 768px) {
            font-size: 4rem;
        }
    }

    & ~ div {
        display: flex;
        flex-direction: column;
        width: 30rem;
        // margin-bottom: 3rem;

        @media screen and (min-width: 768px) {
            width: 50rem;
        }

        & > label {
            display: inline-block;
            margin-bottom: 0.5rem;
            font-size: 2rem;
            color: #ffd300;

            @media screen and (min-width: 768px) {
                font-size: 3rem;
            }
        }

        & > input {
            margin-bottom: 3rem;
        }
    }

    & ~ button {
        width: 30rem;
        height: 6rem;
        font-size: 3rem;

        @media screen and (min-width: 768px) {
            width: 50rem;
        }
    }
`;

const SignUpPage = () => {
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

    const [nickname, setNickname] = useState('');
    const onChangeNickname = useCallback(
        (e) => {
            setNickname(e.target.value);
        },
        [nickname],
    );

    const [phone, setPhone] = useState('');
    const onChangePhone = useCallback(
        (e) => {
            setPhone(e.target.value);
        },
        [phone],
    );

    // 이미 등록된 사용자 혹은 전화번호인지 확인
    const [registered, setRegistered] = useState(true);

    const checkRegistered = () => {
        // 등록된 사용자인지 확인
        // 예를 들어, 등록된 사용자다.
        setRegistered(true);
    };

    const [registerError, setRegisterError] = useState(false);

    const renderSubmitBtn = useCallback(() => {
        // 중복된 사용자라면, button disable
        if (registerError) {
            return (
                <Button
                    type="submit"
                    onClick={checkRegistered}
                    style={{
                        backgroundColor: 'rgba(255,211,0,0.5)',
                    }}
                    disabled
                >
                    회원가입하기
                </Button>
            );
        }

        return (
            <Button type="submit" onClick={checkRegistered}>
                회원가입하기
            </Button>
        );
    }, [registerError]);

    const onSubmitForm = useCallback(() => {
        // 전화번호 중복 확인
        // if(){ //중복이라면
        //     setRegistered(true);
        // }

        // 중복이라면 경고 메세지 띄우고,
        // if (registered) {
        //     setPhone('');
        //     return alert('이미 등록된 사용자입니다. 전화번호를 다시 입력해주십시오.');
        // }
        dispatch(registerUser({ role, phone, nickname }));
    }, [role, phone, nickname]);

    return (
        <Center>
            <form onSubmit={onSubmitForm} aria-label="회원가입 폼입니다.">
                <InputBox>
                    <input type="checkbox" id="role" value={role} onClick={onChangeRole} />
                    <label htmlFor="role">개발자라면 클릭해주세요.</label>
                </InputBox>
                <div>
                    <label htmlFor="nickname">닉네임을 입력해주세요</label>
                    <input
                        type="text"
                        id="nickname"
                        value={nickname}
                        onChange={onChangeNickname}
                        autoFocus
                        style={{
                            height: '5rem',
                            fontSize: '2.4rem',
                            borderRadius: '6px',
                        }}
                    />
                    <label htmlFor="phone">전화번호를 입력해주세요</label>
                    <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={onChangePhone}
                        pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                        maxLength="13"
                        title="010-0000-0000 형식으로 입력해주세요."
                        style={{
                            height: '5rem',
                            fontSize: '2.4rem',
                            borderRadius: '6px',
                        }}
                    />
                    {registerError && <ErrorMessage>이미 등록된 전화번호입니다.</ErrorMessage>}
                </div>
                <Button type="submit">회원가입하기</Button>
            </form>
        </Center>
    );
};

export default SignUpPage;
