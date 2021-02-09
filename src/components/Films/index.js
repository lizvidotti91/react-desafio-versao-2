import React from 'react';

import Article from '../Article';

function Films() {
    const [lista, setLista] = React.useState({ movies: [] });
    let currentId = null;
    let movies = fetch('https://api.themoviedb.org/3/discover/movie?api_key=b5d0e5fd9722187c8fd22a8cd3b93de7&language=pt-BR&')
        .then(movies => movies.json())
        .then(lista => {
            setLista({ movies: [...lista.results] })
        });

    return (
        <div>
            {
                lista.movies.map(movie => {
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
                                        onClick={() => {

                                        }}
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

export default Films;