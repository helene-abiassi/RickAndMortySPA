import React from "react";
import Modal from 'react-bootstrap/Modal';


function CardModal({handleClose, show, character}) {

    const {id, image, name, species, status} = character;
    const location= character.location.name

    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body> <img className= "CharacterCardImg" src={image} alt={id} />
        <p>Specie: {species}</p>
        <p>Status: {status}</p>
        <p>Last seen: {location}</p>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
}


export default CardModal