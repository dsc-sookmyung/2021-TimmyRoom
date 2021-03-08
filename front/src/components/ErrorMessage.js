import styled from 'styled-components';

const ErrorMessage = styled.div`
    width: 30rem;
    font-size: 2rem;
    color: red;

    @media screen and (min-width: 768px) {
        width: 50rem;
        font-size: 2.5rem;
    }
`;

export default ErrorMessage;
