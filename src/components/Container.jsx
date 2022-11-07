import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'
import tittle from '../assets/img/tittle.png'

const Container = ({ typeId, setTypeId, serchType, location }) => {
   
    
    return (

        <div className='containerApp'>
             <img src={tittle} alt="" />
            <div className='containerHead'>
                <b>Buscar : </b><br />
                <input type="text" value={typeId} onChange={e => setTypeId(e.target.value)} placeholder="Serch by Id Location"/>
                <button onClick={serchType}> <i className="fa-solid fa-magnifying-glass"></i> </button>
                <p>{typeId}</p>
            </div>

            <div className='containerLocation'>
                <div className='location'>
                    <p><b>Location: </b>{location?.name} </p>
                </div>

                <div className='detailsLocation'>
                   <>  <p><b>Type: </b>{location?.type}</p> </>  
                   <> <p><b>Dimension: </b>{location?.dimension}</p> </> 
                   <>  <p><b>Population: </b>{location?.residents?.length}</p> </> 
                </div>

                <div className='characters'>
                    <ul >
                        {
                            location.residents?.map(character => (
                                <Character key={character}
                                    character={character} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Container;