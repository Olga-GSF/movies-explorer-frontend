import React, { useState } from "react";


function FilterCheckbox() {
  const [active, setActive] = useState(false);

  return (
    <div onClick={() => setActive(!active)} className={active ? 'filter__toggle filter__toggle_active' : "filter__toggle"} >
      <div className={active ? 'filter__toggle-handle filter__toggle-handle_active' : "filter__toggle-handle"}>

      </div>
    </div>
  )
}

export default FilterCheckbox;