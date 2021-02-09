import React from 'react';

import Films from '../Films';
import FilmsSearch from '../FilmsSearch';
import Container from './styles';

// Inicializando os estados da tela, para alternar entre a lista inicial de filmes, e a lista de busca
const state = {
    HOME: 'HOME',
    SEARCH: 'SEARCH',
}

function InputSearch() {
    // Inicio a tela com o estado HOME, que apresenta a tela inicial
    const [stateScreen, setStateScreen] = React.useState(state.HOME);
    const [lista, setLista] = React.useState({ movies: [] });
    const [searchTerm, setSearchTerm] = React.useState('');

    // Pegando o valor do input
    function handleChange(e) {
        setSearchTerm(e.target.value);
    }

    // Ao dar enter quando termino de escrever o termo de busca, fazemos uma requisição da API, buscando pelo termo digitado
    function handleSubmit(e) {
        e.preventDefault();
        setStateScreen(state.SEARCH);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b5d0e5fd9722187c8fd22a8cd3b93de7&query=${searchTerm}&language=pt-BR&`)
            .then(movies => movies.json())
            .then(lista => {
                setLista({ movies: [...lista.results] });
            })
    }

    return (
        <Container
            onSubmit={handleSubmit}
        >
            <Container.Input
                placeholder="Busque um filme por nome ou gênero"
                onChange={handleChange}
            />
            {/* Validações:
            - SE o estado da tela é HOME, ENTÃO exiba a lista inicial de filmes
            - SE o estado da tela é SEARCH, ENTÂO exiba a lista de busca */}
            {stateScreen === 'HOME' && <Films />}
            {stateScreen === 'SEARCH' && <FilmsSearch movieList={lista.movies} />}
        </Container>
    );
}

export default InputSearch;