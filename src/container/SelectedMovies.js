import React,{Component} from 'react';
import {connect} from 'react-redux';
import Slider from 'react-image-slider';

class SelectedMovies extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const selectedMovieImgs = this.props.selectedMovies.filter(function(selectedMovie){
            return (selectedMovie.multimedia !== undefined &&  selectedMovie.multimedia.src !== undefined);
        }).map(function(imgItem){
            return imgItem.multimedia.src;
        });
        console.log(selectedMovieImgs);
            
        return (
            <div className="selectedMovies">
            <Slider images={selectedMovieImgs} isInfinite delay={2000}>
                {selectedMovieImgs.map((image, key) => <div key={key}><img src={image} /></div>)}
            </Slider>
            </div>
        )
    }
}

function mapStateToProps(state){
    return { selectedMovies : state.movieDetail.selectedItems }
}

export default connect(mapStateToProps)(SelectedMovies);