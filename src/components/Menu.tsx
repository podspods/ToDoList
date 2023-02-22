import { Link } from "react-router-dom";
import { MenuContainer, MenuHeader, MenuItem } from "../style/Menu.style";

/**
 * this function do ...
 */
export default function Menu() {
  return (
    <>
      {/* 4. le visuel---------------------------------- */}
      <MenuContainer>
        <MenuItem>
          <Link to="/" >
            Accueil
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/Subscription" >
          Subscription
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/TodoList" >
          TodoList
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/outputTest" >
          OutputTest
          </Link>
        </MenuItem>
      </MenuContainer>
    </>
  );
}
