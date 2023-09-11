import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import CardModal from "./CardModal";
// import Modal from 'react-bootstrap/Modal';

function CharacterCards({ character }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {id, image, name} = character;
    

    return (
          <>
          <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img className= "CharacterCardImg" src={image} alt={id} />
                </div>
           
            <div className="flip-card-back">

                    <Button variant="primary" onClick={handleShow}>
        More
      </Button>
      <CardModal handleClose={handleClose} show={show} character={character}/>

          
             </div>
             </div> 
          </div>
          
          </>
    );
  }


  
  export default CharacterCards ;