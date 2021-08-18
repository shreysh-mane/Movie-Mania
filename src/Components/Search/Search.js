import { data } from "./../data";
import "./Search.css";
// import React, { useState } from "react";

const Search = (props) => {
  let movieType = Object.keys(data[0]);
  // let movieType = data.map((movie) => Object.keys(data[0]));

  const typeSelect = (type) => {
    // console.log(data[0][type]);
    // console.log(Object.values(data[0][type]));
    let movies = Object.values(data[0][type]).map((e) => {
      return e;
    });
    // console.log(Array.isArray(movies));
    props.choice(movies);
    // for (let obj of movies) {
    //   console.log(obj["name"]);
    // }
  };

  return (
    <nav className="container-center">
      {movieType.map((type) => {
        return (
          <h3 key={type} onClick={() => typeSelect(type)}>
            {type}
          </h3>
        );
      })}
    </nav>
  );
};
export default Search;
