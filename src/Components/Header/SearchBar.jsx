import { FaSearch } from "react-icons/fa";
import { SeacrhContainer } from "./HeaderStyled.jsx";

import { useState } from "react";

export default function SeacrhBar({ menuState }) {
  const [openSearch, setOpenSearch] = useState(false);
  function handleClickSearch() {
    setOpenSearch((prevState) => !prevState);
  }

  return (
    <SeacrhContainer>
      {!menuState ? (
        <input
          type="text"
          placeholder="Search Products.."
          className={openSearch ? "active" : undefined}
        />
      ):null}

      <div id="icon-container" onClick={handleClickSearch}>
        <FaSearch />
      </div>
    </SeacrhContainer>
  );
}
