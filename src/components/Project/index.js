//Gallery
import React from 'react';
import Portfolio from "../Portfolio";
import Resume from '../Resume';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Project(props) {
  const { currentCategory } = props;
    return (
      <section>
        <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
        <p>{currentCategory.description}</p>
        <Portfolio category={currentCategory.name} />
        <Resume category={currentCategory.name} />
      </section>
    );
  }
export default Project;