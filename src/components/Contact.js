// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = ({ data }) => {
  const { name, phone, email, photo } = data;
  return (
    <div className="card">
      <div>
        <img src={photo} alt="foto_kucing" width="200" height="200"></img>
      </div>
      <div>
        <b>
          <p>{name}</p>
        </b>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Contact;
