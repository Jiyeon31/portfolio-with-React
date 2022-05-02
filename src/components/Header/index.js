import React from 'react';
import profileImage from "../../assets/profile/JiyeonYou.jpg";

function About() {
  return (
    <section>
      <h1 id="about">About me</h1>
      <img src={profileImage} className="my-2" style={{ width: "20%" }} alt="profile" />
    </section>
  );
}

export default About;