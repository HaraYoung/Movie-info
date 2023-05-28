import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import CssStyle from "../assets/css/MovieComponent.module.css";

import noImg from "../assets/img/no_image.png";

const MovieInfoComponent = ({ id, title, coverImg, summary, genres }) => {
  return (
    <div className={CssStyle.movieContainer}>
      <img
        src={coverImg}
        onError={(e) => {
          e.target.onError = null;
          e.target.src = noImg;
        }}
        alt={title}
        width="230px"
        height="345px"
      />
      <div className={CssStyle.movieContent}>
        <div>
          <Link to={`/detail/${id}`} className={CssStyle.movieTitle}>
            {title}
          </Link>
          <ul className={CssStyle.list}>
            {genres.map((item, idx) => (
              <li key={item} className={CssStyle.movieGenres}>
                {item
                  ? idx === 0
                    ? `▪️ ${item} `
                    : genres.length === idx + 1 && genres.length !== 1
                    ? `${item}, `
                    : item
                  : ""}
              </li>
            ))}
          </ul>
        </div>
        <p>{summary.length ? `${summary.slice(0, 250)} ...` : summary}</p>
      </div>
    </div>
  );
};

MovieInfoComponent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

MovieInfoComponent.defaultProps = {
  title: "none",
  coverImg: { noImg },
  summary: "none",
  genres: "none",
};
export default MovieInfoComponent;
