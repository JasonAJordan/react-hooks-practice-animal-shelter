import React from "react";

function Filters({setFilters, handleGetPets}) {

  // function handleFindPets(event){
  //   handleGetPets();
  // }

  function handleChange(event){
    setFilters({ type: event.target.value})
  }


  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" onChange={handleChange}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button" onClick={handleGetPets}>Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
