import Title from './styles';

// Título da página. Ao clicar no título, a página é retornada para a lista inicial de filmes
function WrapperTitle() {
    return (
        <Title>
            <a href="/">Movies</a>
        </Title>
    );
}

export default WrapperTitle;