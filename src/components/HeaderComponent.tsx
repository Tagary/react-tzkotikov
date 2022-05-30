import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <div>
      <header className="header__nav">
        <nav className="nav__bar">
          <ul className="nav__barul">
            <li>
              <Link to="/">All cats</Link>
            </li>
            <li>
              <Link to="/favorite">Favorite cats</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
