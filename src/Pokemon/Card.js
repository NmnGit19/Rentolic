import React from 'react';

const Card = (props) => {
    return (
        <div className='card'>
            <div className='under_div'>
                <img src={props.img} style={{ height: '150px', width: '150px' }} />
                <h1>Id no: {props.id}</h1>
                <h1>Name: {props.name}</h1>
                <h1>Moves: {props.moves}</h1>
                <h1>Orders: {props.order}</h1>
            </div>
        </div>
    )
};
export default Card;
