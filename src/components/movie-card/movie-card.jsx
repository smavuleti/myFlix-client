import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
    //const {book} = props;
    return <div class="movie-list"
        onClick={() => {
            onMovieClick(movie);
        }}
    >
        {movie.title}</div>;

};

MovieCard.propTypes = {
    movie:PropType.shape({
        title:PropTypes.String
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};