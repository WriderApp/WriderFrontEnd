import { useState } from "react";
import { Link } from "react-router-dom"

function Index(props) {
  // state to hold form data
  const [newForm, setNewForm] = useState({
    name: "",
    title: "",
    image: "",
  });

  // handle change
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createWrider(newForm);
    setNewForm({
      name: "",
      title: "",
      image: "",
    });
  };

  // loaded function
  const loaded = () => {
    return props.wrider.map((wrider) => (
      <div key={wrider._id} className="wrider">
        <Link to={`/wrider/${wrider._id}`}>
          <h1>{wrider.name}</h1>
          </Link>
        <img src={wrider.image} alt={wrider.name} />
        <h3>{wrider.title}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Add Wrider"></input>
      </form>
      {props.wrider ? loaded() : loading()};
    </section>
  );
}

export default Index