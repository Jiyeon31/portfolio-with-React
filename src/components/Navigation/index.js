import React from 'react';

function Navigation() {
  const categories = [
    {
      name: "",
      description:
        "profile",
    }]
  function categorySelected() {

    }

  return (
    <header>
  <h2>
    <a href="/">
      <span aria-label="main"></span> Jiyeon You
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
      {categories.map((category) => (
        <li
          className="mx-1"
          key={category.name}
        >
          <span onClick={categorySelected} >
            {category.name}
          </span>
        </li>
      ))}
    </ul>
  </nav>
</header>
  );
}

export default Navigation;