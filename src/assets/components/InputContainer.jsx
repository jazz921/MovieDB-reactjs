import React from "react";

const InputContainer = ({ inputHandler, text, searchHandler }) => {
  return (
    <form onSubmit={searchHandler}>
      <div className="input-container">
        <input
          type="text"
          placeholder="Search Movie"
          onChange={inputHandler}
          value={text}
        />
        {/* <button onClick={searchHandler}>Search</button> */}
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default InputContainer;
