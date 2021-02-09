import styled from 'styled-components';

const Title = styled.nav`
    align-items: center;
    background-color: #457B9D;
    display: flex;
    font-size: 5vh;
    font-weight: 100;
    height: 8vh;
    justify-content: center;
    width: 100vw;
    @media screen and (max-width: 800px){
        font-size: 3vh;
        height: 4vh;
    }
    a{
        color: #A8DADC;
        text-decoration: none;
        transition: 0.3s;
        &:hover, &:focus{
            color: #75989a;
        }
    }
`;

export default Title;