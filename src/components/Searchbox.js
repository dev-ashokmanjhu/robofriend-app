import React from "react";

const Searchbox = ({searchfield ,searchChange}) => {
  return(
<div className="pa2">
   <input
   className="pa3 ba b--green bg-light-green"
   type="search"
   placeholder="Search Here"
   onChange={searchChange}
     /> </div>
   );
}

export default Searchbox;
