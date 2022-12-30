import React, { useState, useEffect } from "react";


function FilterCheckbox({ handleFilter, active, setActive }) {


  return (
    <div className='filter__checkbox'>
      <label className="filter__checkbox-label">
        <input onClick={() => {

          handleFilter(active)
        }} className={active ? 'filter__input-toggle filter__input-toggle_active' : "filter__input-toggle"} />
        <div className={active ? 'filter__toggle-handle filter__toggle-handle_active' : "filter__toggle-handle"}>
        </div>
      </label>
    </div>
  )
}

export default FilterCheckbox;