import { useState } from 'react';

const PhoneForm = ({ phone }) => {
    return (
        <div
            style={{ display: 'flex', flexDirection: 'column', width: '30rem' }}
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
                placeholder="전화번호를 입력해주세요."
                pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                maxLength="13"
                title="XXX-XXXX-XXXX 형식으로 입력해주세요."
                style={{
                    height: '5rem',
                    marginBottom: '3rem',
                    fontSize: '2.4rem',
                }}
            />
        </div>
    );
};

export default PhoneForm;
