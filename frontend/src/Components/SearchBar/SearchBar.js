import React from 'react';
import "../SearchBar/SearchBar.sass";

class SearchBar extends React.Component {
  render(){
    return (
    <div className="searchbar--wrap">
      <select className="searchbar__btn--dropdown">
          <option value="all">All</option>
          <option value="author">
            Author
          </option>
          <option value="title">Title</option>
      </select>
      <input className="searchbar__input" type="text" name="searchbar" placeholder="Search" />
      <button className="searchbar__btn">
        <span> Search </span>
      </button>
  </div>
  );
    }
}




export default SearchBar;