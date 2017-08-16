import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchMovieDetails} from '../actions/index';

class MovieSearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term : ''};
        this.onSearchInputChange = this.onSearchInputChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    onSearchInputChange(evt){
        this.setState({term:evt.target.value});
    }

    onSearchSubmit(evt){
        evt.preventDefault();
        this.props.fetchMovieDetails(this.state.term);
        this.setState({term:''});
    }

    render(){
        return (
            <form className="input-group" onSubmit={this.onSearchSubmit}>
                <input 
                    placeholder="Enter movie title" 
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onSearchInputChange}
                />
                <span className="input-group-btn" >
                    <button type="submit" className="btn btn-success">Search</button>
                </span>
            </form>
        )
    }


}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchMovieDetails }, dispatch);
}

export default connect(null, mapDispatchToProps)(MovieSearchBar);