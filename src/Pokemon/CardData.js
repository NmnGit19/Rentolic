import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

function CardData() {
    const [pokemon, setPokemon] = useState();
    const [newPokemon, setNewPokemon] = useState();
    const [img, setImg] = useState();
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [moves, setmoves] = useState();
    const [order, setOrder] = useState();

    const finalVal = () => {
        setNewPokemon(pokemon);
    }

    const getVal = (even) => {
        setPokemon(even.target.value)
    }

    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${newPokemon}`);
            setImg(res.data.sprites.other.dream_world.front_default);
            setId(res.data.id);
            setName(res.data.name);
            setOrder(res.data.order);
            setmoves(res.data.moves.length);
            console.log(res);
        }
        getData();
    });
    return (
        <>
            <div className='card_data'>
                <h2 className='top_heading'>Find your Hero</h2>
                <input placeholder='Enter Your Hero Name' onChange={getVal} />
                <button className='searct_btn' style={{ cursor: "pointer" }} type="button" onClick={finalVal}>Search</button>
            </div>
            <div className='CardData'>
                <Card name={name} moves={moves} order={order} id={id} img={img} />
            </div>
        </>
    )
}

export default CardData; 