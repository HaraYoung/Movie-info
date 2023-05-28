import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import LoadingBar from '../component/Spinner.js'
import MovieInfo from "../component/MovieInfoComponent.js";

const Movie = () => {
  const [loading, setLoading] = React.useState(true);
  const [movies, setMovies] = React.useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=year`
    );
    const json = await response.json();
    //const json = await (await fetch(`https://....`)).json(); 과 같다.

    setMovies(json.data.movies);
    //로딩 false
    setLoading(false);
  };
  React.useEffect(() => {
    getMovies();
  }, []);
  const movieArrHalf = Math.ceil(movies.length / 2);
  const firstMovieArr = movies.slice(0, movieArrHalf);
  const secondMovieArr = movies.slice(movieArrHalf);
  return (
    <Container>
      {loading ? (
        <LoadingBar visible={loading} />
      ) : (
        <div>
          <Row>
            <Col>
              {firstMovieArr.map((movie) => (
                <MovieInfo
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  coverImg={movie.medium_cover_image}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              ))}
            </Col>
            <Col>
              {secondMovieArr.map((movie) => (
                <MovieInfo
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  coverImg={movie.medium_cover_image}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              ))}
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
};

export default Movie;
