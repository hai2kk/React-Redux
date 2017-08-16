import React,{Component} from 'react';
import {connect} from 'react-redux';

class MovieList extends Component{
    renderMovieDetail(movieData){
        return(
            <li className="list-group-item">{movieData.display_title}</li>
        )
    }

    render(){
        return (
            <ul className="list-group">
                {this.props.movieDetail.map(this.renderMovieDetail)}
          </ul>
        )
    }
}

function mapStateToProps(state){
    console.log(JSON.stringify(state.movieDetail));
    return { movieDetail : state.movieDetail.searchResults }
}

export default connect(mapStateToProps)(MovieList);