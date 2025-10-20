import { FaSearch } from "react-icons/fa";
import {SeacrhContainer} from "./HeaderStyled.jsx";



export default function SeacrhBar() {
  return (
    <SeacrhContainer>
      <input type="text" placeholder="Search Products.." />
      <div id="icon-container">
        <FaSearch />
      </div>
    </SeacrhContainer>
  );
}
