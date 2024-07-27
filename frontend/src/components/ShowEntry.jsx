/////Christopher's code going in this file

import { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";

const Show = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const wriders = props.wriders;
  const wrider = wriders.find((w) => w._id === id);

  // state for form
  const [editForm, setEditForm] = useState(wrider);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  }

  // handleSubmit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateWriders(editForm, wrider._id);
    // redirect back to index page
    navigate("/");
  };

  const removeWrider = (e) => {
    e.preventDefault();
    props.deleteWriders(wrider._id);
    // redirect back to index page
    navigate("/");
  };

  return (
    <div className="wrider">
      <h1>{wrider.name}</h1>
      <h2>{wrider.title}</h2>
      <img src={wrider.image} alt={wrider.name} />
      <button id="delete" onClick={removeWrider}>DELETE</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Update Wrider" />
      </form>
    </div>
  );
};

export default Show;
