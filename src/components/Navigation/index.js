import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Navigation() {
  const [categories] = useState([
    {
      name: "",
      description:
        "",
    }]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <header className="flex-row">
      <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 my-2" width="90" height="60" fill="currentColor" class="bi bi-pc-display-horizontal" viewBox="0 0 16 16">
        <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z"/>
      </svg>
      <h2 className="my-2 py-2">
        <a class="name" data-testid="link" href="/">
          Jiyeon You
        </a>
      </h2>
      <nav>
        <ul className="flex-row mx-5">
          <li className="mx-2 my-2">
            <font size="+2">
            <a
              href="#about"
            >
              About me
            </a>
            </font>
          </li>
          <li className="mx-2 my-2">
            <font size="+2">
              <span>Contact</span>
            </font>
          </li>
          {categories.map((category) => (
            <li className={`mx-4 my-4 ${
                currentCategory.name === category.name && 'navActive'
                }`} key={category.name}>
                <font size="+2">
                  <span
                    onClick={() => {
                    setCurrentCategory(category)
                  }}
                >
                    {capitalizeFirstLetter(category.name)}
                  </span>
                </font>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;