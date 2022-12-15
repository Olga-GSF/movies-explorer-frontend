import React, { useState } from "react";

function MoviesCard() {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <li className="movie__card">
      <div className="movie__title-wrap">
        <div className="movie__title-container">
          <h2 className="movie__title">33 слова о дизайне</h2>
          <p className="movie__long">1ч 47м</p>
        </div>
        <button onClick={() => setIsSaved(!isSaved)} type="button" aria-label="save" className={isSaved ? "movie__button-save movie__button-save_active" : "movie__button-save"}></button>
      </div>
      <img src="https://images.unsplash.com/photo-1561728130-afd430af0493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80#" alt="фильм" className="movie__image" />
    </li>
  )
}

export default MoviesCard;