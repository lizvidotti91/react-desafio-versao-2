import styled from "styled-components";

// Estilizações usando o styled-components
// Estilização CSS utilizando o javascript
// Meu componente principal é o Container
const Container = styled.form`
    text-align: center;
`;

// Para cada elemento filho, utilizado a sintaxe Container.NovoElemento
Container.Input = styled.input`
    border: none;
    border-radius: 20px;
    background-color: #e0dbdb;
    margin-top: 30px;
    padding: 3% 3% 3% 6%;
    width: 90%;
    @media screen and (min-width: 800px){
        margin-top: 60px;
        padding: 10px 10px 10px 18px;
    }
    &:placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #1D3557;
        font-size: 14px;
        font-weight: 100;
    }
    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #1D3557;
        font-size: 14px;
        font-weight: 100;
    }
    &:-ms-input-placeholder { /* Microsoft Edge */
        color: #1D3557;
        font-size: 14px;
        font-weight: 100;
    }
`;

export default Container;