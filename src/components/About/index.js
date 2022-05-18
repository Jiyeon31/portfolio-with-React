import React from 'react';
import profileImage from "../../assets/profile/JiyeonYou.jpg";

function About() {
  return (
    <section>
      <h1 className="my-2 py-2" id="about">About me</h1>
        <img src={profileImage} className="my-2 round" style={{ width: "25%" }} alt="profile" />
            <p className="my-2 py-2">I know English, Korean and Mandarin and more! also I'm passionate about software engineering and gaming industry.
            Have worked at a cosmetic store for 1 year as a sales staff and maintained 80% of income as before covid in 2020.
            Easily adapt to any environment through sales staff experience.
            Get along with anyone well and good at coping with any arguable situations through teaching experience.
            Ready to work as a global worker with proper language skills and international experiences.</p>
    </section>
  );
}

export default About;
