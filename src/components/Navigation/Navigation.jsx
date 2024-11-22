import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/facebook-post">Facebook Post</Link>
        </li>
        <li>
          <Link to="/facebook-message">Facebook Message</Link>
        </li>
        <li>
          <Link to="/whatsapp">WhatsApp</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
