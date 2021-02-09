import React from 'react';

import Article from "../Article";

function FilmsSearch({ movieList, viewMovieInfo }) {
    return (
        <div>
            {
                movieList.map((movie) => {
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
                                <Article.Title> <h2>{movie.title}</h2> </Article.Title>
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