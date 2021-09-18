import React, { useState } from "react";

const CreateUser = props => {
  const initialData = {
    id: null,
    first_name: "", 
    last_name: "", 
    birthdate: "",
    email: "",
    phone: "",
    address: ""
  };
  const [user, setUser] = useState(initialData);

  const onInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const cancel = event => {
    event.preventDefault();
    props.setActiveModal({ active: false });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.createUser(user);
      }}
    >
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          name="first_name"
          value={user && user.first_name}
          onChange={onInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          value={user && user.last_name}
          onChange={onInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Date of Birth</label>
        <input
          type="date"
          name="birthdate"
          value={user && user.birthdate}
          onChange={onInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user && user.email}
          onChange={onInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={user && user.phone}
          onChange={onInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={user && user.address}
          onChange={onInputChange}
          required
        />
      </div>
      <div className="form-group form-group--actions">
        <button className="primary-btn">Create</button>
        <button className="cancel-btn" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CreateUser;
