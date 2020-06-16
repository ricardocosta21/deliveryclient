import React from 'react';

const Contacts = ({ contacts }) => (
  <div>
    <center>
      <h1>Contact List</h1>
    </center>
    {contacts.map((contact, index) => (
      <div key={index}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{contact.id}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{contact.name}</h6>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Contacts;
