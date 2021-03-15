import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Center from './Center';
import Button from './Button';
import { loginUser } from '../reducers/users';

const LoginBox = styled.div`
    & > label {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 2rem;
        color: #ffd300;

        @media screen and (min-width: 768px) {
            font-size: 3rem;
        }
    }

    & > input {
        width: 30rem;
        height: 5rem;
        margin-bottom: 3rem;
        font-size: 2.4rem;
        border-radius: 6px;

        @media screen and (min-width: 768px) {
            width: 50rem;
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

const LogInPage = (props) => {
    const dispatch = useDispatch();

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

    const onSubmitForm = useCallback(() => {
        dispatch(loginUser({ nickname, phone }));
        props.history.push('/main');
    }, [nickname, phone]);

    return (
        <Center>
            <form onSubmit={onSubmitForm} aria-label="로그인 폼입니다.">
                <LoginBox>
                    <label htmlFor="nickname">닉네임을 입력해주세요</label>
                    <input
                        type="text"
                        id="nickname"
                        value={nickname}
                        onChange={onChangeNickname}
                        autoFocus
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
                    />
                </LoginBox>
                <Button type="submit">로그인하기</Button>
            </form>
        </Center>
    );
};

export default withRouter(LogInPage);
