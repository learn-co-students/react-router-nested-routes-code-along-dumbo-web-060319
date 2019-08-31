import React from 'react';
import PropTypes from 'prop-types';

const MovieShow = ({ match, movies }) => {
  return (
    <div>
      <h3>
        {movies[match.params.movieId].title}
      </h3>
    </div>
  );
}


export default MovieShow;
