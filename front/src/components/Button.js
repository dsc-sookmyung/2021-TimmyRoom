import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32rem;
    height: 16rem;
    border: none;
    font-size: 36px;
    font-weight: 700;
    cursor: pointer;
    color: #000;
    background-color: #ffd300;

    &:focus {
        outline-color: #ffd300;
    }
`;

export default Button;
