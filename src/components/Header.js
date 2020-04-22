import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import texts from "../texts";

function Header() {
  return (
    <header className="App-header">
      <div className="Header-content">
        <p className="Header-title">{texts["header-title"]}</p>
        <FontAwesomeIcon className="Header-logo" icon={["fab", "github"]} />
      </div>
    </header>
  );
}

export default Header;
