import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25rem;
    height: 13rem;
    border: none;
    font-size: 3.1rem;
    font-weight: 700;
    cursor: pointer;
    color: #000;
    background-color: #ffd300;

    &:focus {
        outline-color: #ffd300;
    }

    @media screen and (min-width: 768px) {
        width: 45rem;
        height: 20rem;
        font-size: 5.5rem;
    }
`;

export default Button;
