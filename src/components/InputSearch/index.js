import React from 'react';

import Films from '../Films';
import FilmsSearch from '../FilmsSearch';
import Container from './styles';

const state = {
    HOME: 'HOME',
    SEARCH: 'SEARCH',
}

function InputSearch() {
    const [stateScreen, setStateScreen] = React.useState(state.HOME);
    const [lista, setLista] = React.useState({ movies: [] });
    const [searchTerm, setSearchTerm] = React.useState('');

    function handleChange(e) {
        setSearchTerm(e.target.value);
    }

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
            {stateScreen === 'HOME' && <Films />}
            {stateScreen === 'SEARCH' && <FilmsSearch movieList={lista.movies} />}
        </Container>
    );
}

export default InputSearch;