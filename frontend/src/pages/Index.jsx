import { useState } from "react";
import { Link } from "react-router-dom"

const Index = (props) => {

  // loaded function
  const loaded = () => {
    return props.wrider.map((wrider) => (
      <div key={wrider._id} className="wrider">
        <Link to={`/wrider/${wrider._id}`}><h1>{wrider.name}</h1></Link>
        <img src={wrider.image} alt={wrider.name} />
        <h3>{wrider.title}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (props.wrider ? loaded() : loading());
}

export default Index