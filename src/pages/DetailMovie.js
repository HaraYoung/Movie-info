import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import CssStyle from "../assets/css/DetailMovie.module.css";

import LoadingBar from '../component/Spinner.js'

import noImg from "../assets/img/no_image.png";

const DetailMovie = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [movieDetail, setMovieDetail] = React.useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovieDetail(json.data.movie);
    setLoading(false);
  };
  console.log(movieDetail);

  React.useEffect(() => {
    getMovie();
  }, []);
  return (
    <div style={{padding: '1.5em 0'}}>
      {loading ? (
         <LoadingBar visible={loading} />
      ) : (
        <div className={CssStyle.container}>
          <div className={CssStyle.img}>
            <img
              src={movieDetail.large_cover_image}
              alt="cover"
              onError={(e) => {
                e.target.onError = null;
                e.target.src = noImg;
              }}
              width="350px"
            />
          </div>
          <div className={CssStyle.content}>
            <h2 className={CssStyle.title}>
              {movieDetail.title}({movieDetail.year})
            </h2>
            <span>
              <h5>Like : {movieDetail.like_count}</h5>
              <h5>Download : {movieDetail.download_count}</h5>
            </span>
            <ul className={CssStyle.list}>
              {movieDetail.genres.map((genre) => (
                <li className={CssStyle.listItem}>
                  {genre ? `▪️ ${genre}` : ""}
                </li>
              ))}
            </ul>
            <p className={CssStyle.description}>
              {movieDetail.description_full ? movieDetail.description_full : ""}
            </p>
              <Link to ='/' className={CssStyle.btn}><span>Home</span></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailMovie;
