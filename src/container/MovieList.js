import React,{Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

class MovieList extends Component{
    renderMovieDetail(movieData){
            const releaseDate = moment(movieData.opening_date,"YYYY-MM-DD").year()

            if(movieData.hasOwnProperty('multimedia') && movieData.multimedia !== null){
                return(
                       <li className="list-group-item">
                            <a href={movieData.link.url} target="_blank">
                                <img src={movieData.multimedia.src} height="50" width="50" />
                                <span className="linkText">{movieData.display_title}({releaseDate})</span>
                            </a>
                        </li>
                )
            }else{
                return(
                       <li className="list-group-item">
                            <a href={movieData.link.url} target="_blank">
                                <span className="linkText">{movieData.display_title}({releaseDate})</span>
                            </a>
                        </li>
                )
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