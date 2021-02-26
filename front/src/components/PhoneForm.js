const PhoneForm = () => {
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
                전화번호 (010-XXXX-XXXX)
            </span>
            <input
                type="text"
                placeholder="전화번호를 입력해주세요."
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
