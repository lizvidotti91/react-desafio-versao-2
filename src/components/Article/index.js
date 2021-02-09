import styled from 'styled-components';

const Article = styled.article`
    display: flex;
    height: 150px;
    margin: 20px auto;
    width: 90%;
    @media (min-width: 800px){
        height: 300px;
    }
`;

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
        font-size: 12px;
        font-weight: 100;
         @media (min-width: 800px){
            font-size: 24px;
        }
    }

    a{
        background-color: var(--prussian-blue);
        border: none;
        border-radius: 5px;
        color: var(--powder-blue);
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
        font-weight: 100;
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
            font-size: 14px;
            padding: 14px;
        }
    }
`;

export default Article;