import { useState, useEffect } from 'react'
import CharacterCards from './CharacterCards';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function Characters(){
  const [characters, setCharacters] = useState();
  const [inputText, setinputText] = useState("")
  const [pageNumber, setPageNumber] = useState(1)

  const fetchCharactersAsync = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pageNumber}`);
      const data = await response.json();
      const characterList = data.results;
console.log(characterList);
      setCharacters(characterList);
    } catch (error) {
    }
  };

  const inputSearchHandler = (e) =>{
console.log(e.target.value);
const text = e.target.value;
setinputText(text)
  }

  const filteredCharacters = characters.filter((character)=>{
    const lowerCaseCharName = character.name.toLowerCase()
    const lowerCaseInpText = inputText.toLowerCase()
return lowerCaseCharName.includes(lowerCaseInpText)
  })


//   console.log(filteredCharacters);

const changePageNumber = (e) => {
    const eventTarget = e.target;

    const buttonClicked = eventTarget.value;
    if (buttonClicked === "next") {
      setPageNumber(pageNumber + 1);
    }
    if (buttonClicked === "prev") {
      setPageNumber(pageNumber - 1);
    }
}


  useEffect(() => {
    fetchCharactersAsync();
  }, [pageNumber]);



return (
  <div>
      <h1>Wubba Lubba dub dub!</h1>

      <div className='SearchBanner'>
      <button className='PaginationButton' value={"prev"} onChange={inputSearchHandler}>← </button>

        <input className="SearchBox" type="text" onChange={inputSearchHandler}/>
        <button className='PaginationButton' value={"next"} 
        onClick={changePageNumber}> →</button>
      </div>


<div className='CharacterContainer'>
  {characters ? (
    characters.map((character) => {
      return (
        <div key={character.id} >
          <CharacterCards character={character} />
        </div>
      );
    })
  ) : (
    <h1>....WHAT???...</h1>
  )}
</div>

  
  
  </div>
)
}



export default Characters