import styled from 'styled-components';

export const CategoryTitle = styled.h1`
    font-size: 3.1rem; 
    margin-bottom: 2rem; 
    color: #ffd300;
    
    @media screen and (min-width: 768px) {
        font-size: 5.5rem;
    }
`;

export const IconBox = styled.div`
    margin: 0 auto 3rem;;

    & > span{
        display: inline-block; 
        color: #ffdc18;

        & > svg{
            width: 8rem; 
            height: 8rem;

            @media screen and (min-width: 768px){
                width: 10rem; 
                height: 10rem;
            }
        }
    }

    & > span:first-child{
        margin-right: 4rem;

        @media screen and (min-width: 768px){
            margin-right: 8rem;
        }
    }
`;