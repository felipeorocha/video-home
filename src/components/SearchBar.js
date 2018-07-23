import React from 'react';

const SearchBar = (props) =>  {
  return(
    <form onSubmit={props.onClick}>
      <input value={props.value} onChange={props.onInputChange} />
      <button onClick={props.onClick}>Search</button>
    </form>
  );
};

export default SearchBar;
