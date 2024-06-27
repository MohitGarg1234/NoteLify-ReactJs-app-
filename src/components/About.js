import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import img from '../images/NotesAppAbout.png'
const About = () => {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="about-content">
            <h2 className="about-title">About NoteLify</h2>
            <p className="about-text">
              Welcome to NoteLify, your go-to platform for organizing and managing your notes effortlessly. Whether you're a student, professional, or anyone who values capturing ideas on the go, our app provides a seamless experience tailored to your needs.
            </p>
            <p className="about-text">
              At NoteLify, we understand the importance of simplicity and functionality. Our intuitive interface allows you to create, edit, and delete notes with ease. Keep your thoughts organized with customizable tags and categories, ensuring quick access to your information whenever you need it.
            </p>
            <p className="about-text">
              We prioritize security and privacy. With robust user authentication and encryption protocols, your data remains safe and accessible only to you. Focus on what matters most—your ideas—and let NoteLify handle the rest.
            </p>
            <p className="about-text">
              Join thousands of users who rely on NoteLify daily to streamline their note-taking process. Whether you're on desktop or mobile, our responsive design ensures a consistent experience across all devices.
            </p>
            <p className="about-action">
              Ready to transform how you manage your notes? <Link to="/signup">Sign up</Link> today and start organizing your thoughts with NoteLify.
            </p>
          </div>
        </div>
        <div className="col-lg-6 mb-3" style={{marginTop:"8%"}}>
          <div className="about-image">
            <img src={img} className="img-fluid rounded about-image" alt="NoteLifyPreview" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
