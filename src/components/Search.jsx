import React, { useState } from 'react'

function Search({handleSearch}) {

  const [term, setTerm] = useState("");
  
  const handleTerm = (e) => {setTerm(e.target.value)}

  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      handleSearch(term)
    }
  }

  return (
    <div className="search">
    <form className="form-inline">
      <input
        className="form-control mr-sm-2"
        type="search"
        value={term}
        onChange={handleTerm}
        onKeyDown={handleKeyDown}
        placeholder="Search.."
        aria-label="Search"
      />
    </form>
  </div>
  )
}

export default Search