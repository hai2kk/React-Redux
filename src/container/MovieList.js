import React,{Component} from 'react';
import {connect} from 'react-redux';
import MovieListItem from '../components/MovieListItem';

class MovieList extends Component{
    constructor(props){
        super(props);
        //this.onResultClick = this.onResultClick.bind(this);
    }

    renderMovieDetail(movieData){
            return (
                <MovieListItem movieData={movieData} key={movieData.id} clickHandler={onResultClick} />
            )

            function onResultClick(evt){
                evt.preventDefault();
                console.log("Hello from child");
            }
    }

    render(){
        return (
           <div className="row text-center movieListItems">
               {this.props.movieDetail.map(this.renderMovieDetail)}
           </div>
        )
    }
}

function mapStateToProps(state){
    return { movieDetail : state.movieDetail.searchResults }
}

export default connect(mapStateToProps)(MovieList);