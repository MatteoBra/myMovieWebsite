import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMovie, setLoading } from '../../actions/searchActions';

import Spinner from '../layout/Spinner';



export class Movie extends Component {
componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
}
render() {
    const { loading, movie } = this.props;

    let movieInfo = (
    <div className="container">
        <div className="row">
        <div className="col-md-4 card card-body">
            <img src={" http://image.tmdb.org/t/p/w300/" + movie.poster_path} className="thumbnail" alt="Poster" />
        </div>
        <div className="col-md-8">
            <h2 className="mb-4">{movie.title}</h2>
            <ul className="list-group">
            <li className="list-group-item">
                <strong>"{movie.tagline}"</strong>              
            </li>
            <li className="list-group-item">
                <strong>Released:</strong> {movie.release_date}
            </li>
            <li className="list-group-item">
                <strong>Runtime:</strong> {movie.runtime} min
            </li>
            <li className="list-group-item">
                <strong>IMDB Rating:</strong> {movie.vote_average}
            </li>
            <li className="list-group-item">
                <strong>Original Language:</strong> "{movie.original_language}"
            </li>
            <li className="list-group-item">
                <strong>Budget:</strong> {movie.budget} $
            </li>
            <li className="list-group-item">
                <strong>Homepage:</strong> {movie.homepage}
            </li>
            </ul>
        </div>
        </div>
        <div className="row">
        <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
            <h3>About </h3>
            {movie.overview}
            <hr />
            <a
                href={'https://www.imdb.com/title/' + movie.imdb_id}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
            >
                View on IMDB
            </a>
            <Link to="/" className="btn btn-default text-light">
                Go Back To Search
            </Link>
            </div>
        </div>
        </div>
    </div>
    );

    let content = loading ? <Spinner /> : movieInfo;
    return <div>{content}</div>;
}
}

const mapStateToProps = state => ({
    loading: state.movies.loading,
    movie: state.movies.movie
});



export default connect(
mapStateToProps,
{ fetchMovie, setLoading}
)(Movie);