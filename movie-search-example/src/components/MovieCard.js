import React from 'react';

function MovieCard(props){
    return (
        <article>
            <h3>{ props.movie.Title }</h3>
            <p>{ props.movie.Year }</p>
        </article>
    )
}

export default MovieCard;