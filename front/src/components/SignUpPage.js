import styled from 'styled-components';
import { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Center from './Center';
import Button from './Button';
import { signUpSuccessAction } from '../reducers/users';

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
            font-size: 3rem;
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

const SignUpPage = (props) => {
    const dispatch = useDispatch();

    const [role, setRole] = useState('USER');
    const onChangeRole = useCallback(
        (e) => {
            if (e.target.checked) {
                setRole('DEV');
            } else {
                setRole('USER');
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

    const localStorage = window.localStorage;
    // 회원가입시 사용하기 위한 data배열로 member라는 localStorage가 있을 경우 해당 data 가져옴
    const data = (!localStorage.getItem("member")) ? [] : JSON.parse(localStorage.getItem("member"));

    const join = () => {
        if(!localStorage){
            alert('로컬 스토리지를 지원하지 않아 회원가입이 불가합니다.'); 
        }

        if(joinCheck()){
            joinData(); 
        }
    }

    const joinCheck = () => {
        const id = document.getElementById("nickname");
        const pw = document.getElementById("phone"); 

        const value = [id, pw]; 
        const valueName = ["닉네임", "전화번호"]; 
        const txt = []; 

        for(let i=0; i<value.length; i++) {
            // 빈 값인 경우 alert 띄우기 위해 txt 배열에 저장
            if(value[i].value === "") {
                txt.push(valueName[i]); 
                console.log(txt);
            }
        }

        const nullTxt = txt.join(', '); 
        if(nullTxt !== ""){ // nullTxt가 빈값이 아니라는 것은 input이 모두 입력 되지 않음
            alert(nullTxt+"란을 확인해 주세요.");
            return false;
        }
        else{
            const joinInfo = {
                nickname: nickname,
                phone: phone, 
                role: role, 
            }
            data.push(joinInfo); 
    
            return true;
        }
    }

    const joinData = () => { // localStorage에 저장
        // 객체로 저장하기 위해서는 JSON.stringify를 사용해 원하는 값으로 저장
        localStorage.setItem("member", JSON.stringify(data));
        dispatch(signUpSuccessAction({ nickname, phone, role }));
        props.history.push('/main');
    }

    const onSubmitForm = useCallback(() => {
        join(); 
    }, [role, phone, nickname]);

    return (
        <Center>
            <form onSubmit={onSubmitForm} aria-label="This is Sign Up Form.">
                <InputBox>
                    <input type="checkbox" id="role" value={role} onClick={onChangeRole} />
                    <label htmlFor="role">Click if you are developer</label>
                </InputBox>
                <div>
                    <label htmlFor="nickname">PUT YOUR NICKNAME</label>
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
                    <label htmlFor="phone">PUT YOUR PHONE NUMBER</label>
                    <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={onChangePhone}
                        pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                        maxLength="13"
                        style={{
                            height: '5rem',
                            fontSize: '2.4rem',
                            borderRadius: '6px',
                        }}
                    />
                </div>
                <Button type="submit">SIGN UP</Button>
            </form>
        </Center>
    );
};

export default withRouter(SignUpPage);
