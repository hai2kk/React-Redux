import React,{Component} from 'react';
import moment from 'moment';

export default class MovieListItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let releaseDate = moment(this.props.movieData.opening_date,"YYYY-MM-DD").year();
        releaseDate = isNaN(releaseDate)?'':`(${releaseDate})`;
        const title = this.props.movieData.display_title;
    
        if(this.props.movieData.hasOwnProperty('multimedia') && this.props.movieData.multimedia !== null){
            return(
                   <li className="list-group-item" key={this.props.movieData.id}>
                        <a className="clickItem" onClick={this.props.clickHandler.bind(null,this.props.movieData)}>
                            <img className="clickItem" src={this.props.movieData.multimedia.src} height="50" width="50" />
                            <span className="linkText">{title}{releaseDate}</span>
                        </a>
                    </li>
            )
        }else{
            return(
                   <li className="list-group-item" key={this.props.movieData.id}>
                        <a onClick={this.props.clickHandler.bind(null,this.props.movieData)} className="clickItem">
                            <span className="linkText">{title}({releaseDate})</span>
                        </a>
                    </li>
            )
        }
    }
}

/*export default (this.props) => {
    let releaseDate = moment(this.props.movieData.opening_date,"YYYY-MM-DD").year();
    releaseDate = isNaN(releaseDate)?'':`(${releaseDate})`;
    const title = this.props.movieData.display_title;

    if(this.props.movieData.hasOwnProperty('multimedia') && this.props.movieData.multimedia !== null){
        return(
               <li className="list-group-item" key={this.props.movieData.id}>
                    <a className="clickItem" onClick={this.props.clickHandler}>
                        <img className="clickItem" src={this.props.movieData.multimedia.src} height="50" width="50" />
                        <span className="linkText">{title}{releaseDate}</span>
                    </a>
                </li>
        )
    }else{
        return(
               <li className="list-group-item" key={this.props.movieData.id}>
                    <a onClick={this.props.clickHandler} className="clickItem">
                        <span className="linkText">{title}({releaseDate})</span>
                    </a>
                </li>
        )
    }

    
}
*/
