import React,{Component} from 'react';
import {connect} from 'react-redux';
import MovieListItem from '../components/MovieListItem';
import {bindActionCreators} from 'redux';
import {fetchSelectedMovies} from '../actions/index';

class MovieList extends Component{
    constructor(props){
        super(props);
        this.onClickMovieItem = this.onClickMovieItem.bind(this);
    }

    renderMovieDetail(onClickMovieItem,movieData){
            return (
               <MovieListItem movieData={movieData} key={movieData.id} clickHandler={onResultClick} />
            )

            function onResultClick(movieData,evt){
                evt.preventDefault();
                onClickMovieItem(movieData);
            }
    }

    onClickMovieItem(movieData){
        this.props.fetchSelectedMovies(movieData);
    }

    render(){
        return (
           <div className="row text-center movieListItems">
               {this.props.movieDetail.map(this.renderMovieDetail.bind(null,this.onClickMovieItem))}
           </div>
        )
    }
}

function mapStateToProps(state){
    return { movieDetail : state.movieDetail.searchResults }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchSelectedMovies }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieList);