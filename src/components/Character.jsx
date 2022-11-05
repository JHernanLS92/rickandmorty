import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../assets/css/App.css'
import '../assets/css/index.css'

const Character = ({ character }) => {

    const [characterITem, setCharacterItem] = useState({})
    const status = characterITem.status
    useEffect(() => {
        axios.get(character)
            .then(res => setCharacterItem(res.data))
    }, [])
    const getStatus = () => {
        if (status === "Alive") {
            return (
                <p><b>Status: </b>  {characterITem.status}  <i className="fa-solid fa-circle" style={{ color: "green" }}></i></p>
            )
        } else if (status === "Dead") {
            return (
                <p ><b>Status: </b>  {characterITem.status}  <i className="fa-solid fa-circle" style={{ color: "red" }}></i></p>
            )
        } else if(status === "unknown"){
            return (
                <p><b>Status: </b>  {characterITem.status}  <i className="fa-solid fa-circle" style={{ color: "yellow" }}></i> </p>
            )
        }
    }
    return (
        <div className='Character'>
            <div className='card'>

                <li >
                    <div className='imgContainer'>
                        <img src={characterITem.image} alt="" />

                    </div>
                    <div className='dataContainer'>

                        <p><b>Name: </b> {characterITem.name}</p>

                        <div className='status'>
                            { getStatus(  characterITem.status )}
                        </div>
                        <p><b>Specie: </b> {characterITem.species}</p>
                        <p><b>Type: </b>{characterITem.type}</p>
                        <p><b>Gender: </b>  {characterITem.gender}</p>
                        <p><b>Episode: </b>  {characterITem.episode?.length}</p>
                    </div>

                </li>
            </div>
        </div>
    );
};

export default Character;