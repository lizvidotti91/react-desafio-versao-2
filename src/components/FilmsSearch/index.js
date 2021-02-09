import React from 'react';

import Article from "../Article";
import MovieInfo from '../MovieInfo';

function FilmsSearch({ movieList }) {
    // Aqui iniciamos o estado da tela como nulo. Ao clicar em exibir mais detalhes, esse estado será alterado, passando a exibir a janela de detalhes
    const [stateScreen, setStateScreen] = React.useState(null);

    // Função para exibir os detalhes do filme
    function viewMovieInfo(id) {
        const filteredMovie = movieList.filter(movie => movie.id === id);
        const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
        setStateScreen(newCurrentMovie);
    }
    // Função para fechar os detalhes do filme e retornar à tela principal
    function closeMovieInfo() {
        setStateScreen(null);
    }

    return (
        <div>
            {/* Validações:
            - SE o estado da tela NÃO é nulo, então exiba os detalhes do filme
            - SE o estado da tela É nulo, então exiba a lista de filmes */}
            {stateScreen != null && <MovieInfo closeMovieInfo={closeMovieInfo} currentMovie={setStateScreen} />}
            {stateScreen === null &&
                movieList.map((movie) => {
                    let id = movie.id;
                    return (
                        <Article key={movie.id}>
                            <Article.Image>
                                {
                                    movie.poster_path === null ?
                                        <img src="https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg" alt="Poster do Filme" />
                                        :
                                        <img src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} />
                                }
                            </Article.Image>
                            <Article.Content>
                                <Article.Title>
                                    <h2>{movie.title}</h2>
                                    <a
                                        href="#"
                                        onClick={() => { viewMovieInfo(id) }}
                                    > Mais</a>
                                </Article.Title>
                                <Article.Vote> <p>{movie.vote_average}</p> </Article.Vote>
                                <Article.Date> <p>{movie.release_date.split('-').reverse().join('/')}</p> </Article.Date>
                                <Article.Overview> <p>{movie.overview}</p> </Article.Overview>
                            </Article.Content>
                        </Article>
                    )
                })
            }
        </div>
    );
}

export default FilmsSearch;