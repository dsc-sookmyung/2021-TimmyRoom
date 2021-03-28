import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Center from './Center';
import Button from './Button';
import { loginSuccessAction } from '../reducers/users';

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
        // dispatch(loginRequestAction({ nickname, phone })); 
        login(); 
    }, [nickname, phone]);

    const localStorage = window.localStorage; 
    const data = (!localStorage.getItem("member")) ? [] : JSON.parse(localStorage.getItem("member"));
    const logCheck = (!localStorage.getItem("login")) ? "" : localStorage.getItem("login");
    const login = () => {
        const id = document.getElementById('nickname'); 
        const pw = document.getElementById('phone'); 

        if(id.value === "" || pw.vale === ""){
            alert('아이디와 비밀번호 모두 입력해주세요!'); 
        }
        else{
            let list = localStorage.getItem("member"); 
            list = JSON.parse(list); // 저장시 Stringify 해주었으므로 사용시에도 변환
            let check = false; 
            for(let i = 0; i < list.length; i++){
                if(list[i].nickname === id.value && list[i].phone === pw.value) { // data에서 일치하는 회원이 있다면
                    check = true;
                }
            }

            if(check === false){
                alert("아이디 또는 비밀번호가 일치하지 않습니다.");
			    id.value = "";
			    pw.value = "";
            }
            else{
                localStorage.setItem("login", id.value); // 로그인 상태를 나타내기 위해 저장			
			    alert("환영합니다! "+ id.value +"님!");
                dispatch(loginSuccessAction({ nickname, phone })); 
                props.history.push('/main');
            }
        }
    }

    return (
        <Center>
            <form onSubmit={onSubmitForm} aria-label="로그인 폼입니다.">
                <LoginBox>
                    <label htmlFor="nickname">PUT YOUR NICKNAME</label>
                    <input
                        type="text"
                        id="nickname"
                        value={nickname}
                        onChange={onChangeNickname}
                        autoFocus
                    />
                    <label htmlFor="phone">PUT YOUR PHONE NUMBER</label>
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
                <Button type="submit">SIGN IN</Button>
            </form>
        </Center>
    );
};

export default withRouter(LogInPage);
