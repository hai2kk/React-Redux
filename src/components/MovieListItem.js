import React,{Component} from 'react';
import moment from 'moment';

export default (props) => {
    let releaseDate = moment(props.movieData.opening_date,"YYYY-MM-DD").year();
    releaseDate = isNaN(releaseDate)?'':`(${releaseDate})`;
    const title = props.movieData.display_title;

    if(props.movieData.hasOwnProperty('multimedia') && props.movieData.multimedia !== null){
        return(
               <li className="list-group-item" key={props.movieData.id}>
                    <a className="clickItem" onClick={props.clickHandler}>
                        <img className="clickItem" src={props.movieData.multimedia.src} height="50" width="50" />
                        <span className="linkText">{title}{releaseDate}</span>
                    </a>
                </li>
        )
    }else{
        return(
               <li className="list-group-item" key={props.movieData.id}>
                    <a onClick={props.clickHandler} className="clickItem">
                        <span className="linkText">{title}({releaseDate})</span>
                    </a>
                </li>
        )
    }

    
}

