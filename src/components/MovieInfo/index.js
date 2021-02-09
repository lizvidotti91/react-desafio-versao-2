import Article from "../Article";

function MovieInfo({ closeMovieInfo, currentMovie }) {
    console.log(currentMovie)
    return (
        <Article key={0}>
            <Article.Image>
                {
                    <img src="https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg" alt="Poster do Filme" />
                }
            </Article.Image>
            <Article.Content>
                <Article.Title>
                    <h2>Título do Filme</h2>
                    <a
                        href="#"
                        onClick={() => closeMovieInfo()}
                    > Voltar</a>
                </Article.Title>
                <Article.Vote> <p>00</p> </Article.Vote>
                <Article.Date> <p>12/12/1212</p> </Article.Date>
                <Article.Overview> <p>Sinopse do Filme</p> </Article.Overview>
            </Article.Content>
        </Article>
    );
}

export default MovieInfo;