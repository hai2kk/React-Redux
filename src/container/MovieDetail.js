import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Modal,ModalHeader,ModalTitle,ModalClose,ModalBody,ModalFooter} from 'react-modal-bootstrap';

class MovieDetail extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const selectedMovies = this.props.selectedMovies.filter(function(selectedMovie){
            return (selectedMovie.display_title);
        });
        //console.log(`Movie Detail will render ${JSON.stringify(selectedMovies)}`);
        var selectedMovieForDisplay = "";
        if(selectedMovies!=undefined && selectedMovies.length > 0){
            selectedMovieForDisplay = selectedMovies[selectedMovies.length-1].display_title;
            console.log(selectedMovieForDisplay);
        }

        return (
            <div>{selectedMovieForDisplay}</div>
            /*<Modal size='modal-lg'>
                <ModalHeader>
                    <ModalClose/>
                    <ModalTitle>Modal title</ModalTitle>
                </ModalHeader>
                    <ModalBody>
                        <p>{selectedMovieForDisplay}</p>
                    </ModalBody>
                <ModalFooter>
                    <button className='btn btn-default'>
                        Close
                    </button>
                </ModalFooter>
            </Modal>*/
        )
    }
}

function mapStateToProps(state){
    return { selectedMovies : state.movieDetail.selectedItems }
}

export default connect(mapStateToProps)(MovieDetail);