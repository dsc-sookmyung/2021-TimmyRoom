import styled from 'styled-components';

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32rem;
    height: 16rem;
    margin-bottom: 2rem;
    font-size: 36px;
    font-weight: 700;
    color: #000;
    background-color: #ffd300;

    &:last-child {
        margin-bottom: 0;
    }
`;

export default Button;
