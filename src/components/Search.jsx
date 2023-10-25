import React, { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import {InputGroup, InputLeftElement, Input} from "@chakra-ui/react"

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
    <InputGroup
    display={{
      base: "none",
      lg: "block",
    }}
    mr={'auto'}
    width={'sm'}
  >
    <InputLeftElement pointerEvents="none">
      <AiOutlineSearch />
    </InputLeftElement>
    <Input type="tel" placeholder="Search..." value={term} onChange={handleTerm} onKeyDown={handleKeyDown} />
  </InputGroup>
  )
}

export default Search