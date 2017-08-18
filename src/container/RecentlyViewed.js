import React,{Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

class RecentlyViewed extends Component{

    render(){
        return (
           <div className="row text-center movieListItems">
               {this.props.movieDetail.map(this.renderMovieDetail)}
           </div>
        )
    }
}