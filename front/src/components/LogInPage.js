import { useState, useCallback } from 'react';

import Center from './Center';
import Button from './Button';

const LogInPage = () => {
    const [phone, setPhone] = useState('');
    const onChangePhone = useCallback(
        (e) => {
            setPhone(e.target.value);
        },
        [phone],
    );

    return (
        <Center>
            <h1>로그인</h1>
            <label
                for="phone"
                style={{
                    display: 'inline-block',
                    marginBottom: '0.5rem',
                    fontSize: '2rem',
                    color: '#ffd300',
                }}
            >
                전화번호를 입력해주세요
            </label>
            <input
                type="text"
                id="phone"
                value={phone}
                autofocus
                onChange={onChangePhone}
                placeholder="전화번호를 입력해주세요."
                pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                maxLength="13"
                title="010-0000-0000 형식으로 입력해주세요."
                style={{
                    height: '5rem',
                    fontSize: '2.4rem',
                }}
            />
        </Center>
    );
};

export default LogInPage;
