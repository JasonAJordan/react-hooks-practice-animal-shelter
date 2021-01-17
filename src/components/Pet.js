import React from "react";

function Pet({pet, AdoptPet}) {


  function handleAdopt(){
    AdoptPet(pet.id)
  }

  return (
    <div className="card">
      <div className="content">
        <span className="header">
          {pet.gender === "female" ? '♀' : '♂' }
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {pet.sAdopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
          <button className="ui primary button" onClick={handleAdopt}>Adopt pet</button>
        )}
      </div>
    </div>
  );
}

export default Pet;
