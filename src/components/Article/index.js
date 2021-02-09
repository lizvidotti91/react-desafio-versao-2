import styled from 'styled-components';

// Estilizações usando o styled-components
// Estilização CSS utilizando o javascript
// Meu componente principal é o Article
const Article = styled.article`
    display: flex;
    height: 150px;
    margin: 20px auto;
    width: 90%;
    @media (min-width: 800px){
        height: 300px;
    }
`;

// Para cada elemento filho, utilizado a sintaxe Article.NovoElemento
Article.Image = styled.div`
    height: 100%;
    img{
        height: 100%;
    }
`;

Article.Content = styled.div`
    height: 100%;
    position: relative;
    width: 100%;
`;

Article.Title = styled.div`
    align-items: center;
    background-color: #457B9D;
    display: flex;
    height: 30px;
    justify-content: space-between;
    padding-left: 40px;
    padding-right: 5px;
    width: 100%;
    @media (min-width: 800px){
        height: 60px;
        padding-left: 100px;
        padding-right: 50px;
    }

    h2{
        color: #A8DADC;
        font-family: 'Abel', sans-serif;
        font-size: 12px;
         @media (min-width: 800px){
            font-size: 24px;
        }
    }

    a{
        background-color: #1D3557;
        border: none;
        border-radius: 5px;
        color: #A8DADC;
        cursor: pointer;
        font-size: 8px;
        font-weight: 100;
        padding: 5px;
        text-decoration: none;
        transition: 0.3s;
        @media (min-width: 800px){
            font-size: 16px;
        }
    }
`;

Article.Vote = styled.div`
    align-items: center;
    background-color: #457B9D;
    border: 2px solid #A8DADC;
    border-radius: 50%;
    display: flex;
    height: 30px;
    justify-content: center;
    left: 5px;
    position: absolute;
    top: 15px;
    width: 30px;
    @media (min-width: 800px){
        height: 60px;
        left: 20px;
        top: 30px;
        width: 60px;
    }

    p{
        color: #A8DADC;
        font-size: 12px;
        @media (min-width: 800px){
            font-size: 24px;
        }
    }
`;

Article.Date = styled.div`
    padding-left: 50px;
    padding-top: 2px;
    @media (min-width: 800px){
        padding-left: 100px;
        padding-top: 4px;
    }
    p{
        color: #1D3557;
        font-size: 10px;
        text-align: left;
        @media (min-width: 800px){
            font-size: 20px;
        }
    }
`;

Article.Overview = styled.div`
    p{
        color: #1D3557;
        font-size: 8px;
        font-weight: 300;
        padding: 4px 7px;
        text-align: justify;
        @media (min-width: 800px){
            font-size: 12px;
            padding: 14px;
        }
        @media (min-width: 900px){
            font-size: 16px;
            padding: 14px;
        }
    }
`;

export default Article;