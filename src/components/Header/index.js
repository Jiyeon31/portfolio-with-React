import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
<header className="flex-row">
<img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-computer-augmented-reality-flaticons-lineal-color-flat-icons.png" style={{ width: "4%" }} className="mx-2"/> 
  <h2>      
    <a href="/">
      Jiyeon You
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li className={`mx-2 ${contactSelected && 'navActive'}`}>
        <span onClick={() => setContactSelected(true)}>Contact</span>
      </li>
      {categories.map((category) => (
        <li 
          className={`mx-2 ${
            currentCategory.name === category.name && 'navActive'
            }`} 
          key={category.name}>
          <span
            onClick={() => {
              setCurrentCategory(category);
              setContactSelected(false);
            }}
          >
            {capitalizeFirstLetter(category.name)}
          </span>
        </li>
      ))}
    </ul>
  </nav>
</header>
  );
}

export default Nav;