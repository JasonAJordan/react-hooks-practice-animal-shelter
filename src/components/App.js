import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });


  function handleGetPets(){
    let url = "http://localhost:3001/pets";
    if (filters.type !== "all") {
      url += `?type=${filters.type}`;
    }

    fetch(url)
      .then((r) => r.json())
      .then((petsArray) => {
        setPets(petsArray);
      });

    // if (filters.type !== "all"){
    //   const filterPets = pets.filter( pet => (pet.type === filters.type))
    //   //console.log(filterPets)
    //   setPets(filterPets)
    // }

  }

  function AdoptPet(id){

    // fetch(`http:/localhost:3001/${id}`, {
    //   method: 'PATCH' ,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify( { isAdopted: true })
    // })
    // .then((r) => r.json())
    // .then((updatedResponse) => {
      const updatedPets = pets.map((pet) => {
        return pet.id === id ? { ...pet, isAdopted: true } : pet;
      });
      setPets(updatedPets);
    // });

  }


  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters setFilters={setFilters} handleGetPets={handleGetPets}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} AdoptPet={AdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
