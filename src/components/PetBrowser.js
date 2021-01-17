import React from "react";
import Pet from "./Pet";

function PetBrowser({pets, AdoptPet}) {

  //console.log(pets ,"brows")
  
  const petRender = pets.map((pet) => (
      <Pet 
      key={pet.id} 
      // id={pet.id}
      // type={pet.type}
      // gender={pet.gender}
      // age={pet.age}
      // weight={pet.weight}
      // name={pet.name}
      // isAdopted={pet.isAdopted} 
      pet={pet}
      AdoptPet={AdoptPet}
      />
    ) )

  return (
    <div className="ui cards">
      {petRender}
    </div>
  );
}

export default PetBrowser;
