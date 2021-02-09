import styled from 'styled-components';

// Estilizações utilizando styled-components
// Aqui faço a estilização CSS dos componentes, usando o JavaScript
const Title = styled.nav`
    align-items: center;
    background-color: #457B9D;
    display: flex;
    font-family: 'Abel', sans-serif;
    font-size: 5vh;
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