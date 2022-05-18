//Photolist
import React, { useState } from 'react';
import Modal from '../Modal';

const Portfolio = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
        {
          name: 'Run Buddy',
          category: 'portfolio',
          description: 'HTML/CSS/BOOTSTRAP - https://jiyeon31.github.io/run-buddy',
        },
        {
          name: 'Horiseon',
          category: 'portfolio',
          description: 'HTML/CSS - https://jiyeon31.github.io/code-refactor/',
        },
        {
          name: 'Robot Gladiator',
          category: 'portfolio',
          description: 'HTML/CSS/JAVASCRIPT - https://jiyeon31.github.io/robot-gladiators/',
        },
        {
          name: 'Taskinator',
          category: 'portfolio',
          description: 'HTML/CSS/BOOTSTRAP/JAVASCRIPT - https://jiyeon31.github.io/taskinator/',
        },
        {
          name: 'Password Maker',
          category: 'portfolio',
          description: 'HTML/CSS/JAVASCRIPT - https://jiyeon31.github.io/easypasswordmaker/',
        },
        {
          name: 'Fun Java Quiz',
          category: 'portfolio',
          description: 'HTML/CSS/JAVASCRIPT - https://jiyeon31.github.io/funjavaquiz/',
        },
        {
          name: 'Taskmaster Pro',
          category: 'portfolio',
          description: 'HTML/CSS/BOOTSTRAP/JAVASCRIPT - https://jiyeon31.github.io/funjavaquiz/',
        },
        {
          name: 'Daily Scheduler',
          category: 'portfolio',
          description: 'HTML/CSS/BOOTSTRAP/JAVASCRIPT - https://jiyeon31.github.io/superEasyScheduler/',
        },
        {
          name: 'Git-it-done',
          category: 'portfolio',
          description: 'HTML/CSS/BOOTSTRAP/JAVASCRIPT - https://jiyeon31.github.io/git-it-done/',
        },
        {
          name: 'Weather Forecast',
          category: 'portfolio',
          description: 'HTML/CSS/BOOTSTRAP/JAVASCRIPT - https://jiyeon31.github.io/weatherfortraveler/',
        },
        {
          name: 'Group Project1',
          category: 'portfolio',
          description: 'HTML/CSS/BOOTSTRAP/JAVASCRIPT - https://hannahhan153.github.io/Travelers',
        },
        {
          name: 'Readme Generator',
          category: 'portfolio',
          description: 'NODE JS/JAVASCRIPT - https://github.com/Jiyeon31/readmecreator',
        },
        {
          name: 'Team Profile Generator',
          category: 'portfolio',
          description: 'NODE JS/JAVASCRIPT - https://github.com/Jiyeon31/profileMaker',
        },
        {
          name: 'Note Taker',
          category: 'portfolio',
          description: 'HTML/CSS/BOOTSTRAP/JAVASCRIPT/NODE JS/REST API/HEROKU - http://noteforyou.herokuapp.com/',
        },
        {
          name: 'Employee Tracker',
          category: 'portfolio',
          description: 'NODE JS/MYSQL/CRUD/JAVASCRIPT - https://github.com/Jiyeon31/employeemanager',
        },
        {
          name: 'E-Commerce Back-end',
          category: 'portfolio',
          description: 'NODE JS/SEQUELIZE/CRUD/REST API/MYSQL/JAVASCRIPT - https://github.com/Jiyeon31/backendforretail',
        },
        {
          name: 'Tech Blog',
          category: 'portfolio',
          description: 'HTML/CSS/JAVASCRIPT/NODE JS/MYSQL/HEROKU/SEQUELIZE - https://technewstable.herokuapp.com/',
        },
        {
          name: 'Group Project2',
          category: 'portfolio',
          description: 'HTML/CSS/BOOTSTRAP/JACASCRIPT/MYSQL/AXIOS/MONGODB - https://nft-y.herokuapp.com/',
        },
        {
          name: 'Regex Tutorial',
          category: 'portfolio',
          description: 'REGEX/GIST(GITHUB) - https://gist.github.com/Jiyeon31/9877f3ad890253ee5d03afec0d0a04a4',
        },
        {
          name: 'Social Network API',
          category: 'portfolio',
          description: 'JAVASCRIPT/NODE JS/MYSQL/MONGODB/REST API - https://github.com/Jiyeon31/SNSapi',
        }
      ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);
  
  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
            style={{ width: "30%" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;