// to access id coming from BrowserRouter in App.jsx, we use useParams
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Carousel from "./Carousel";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams();
  // find the id in cache, and if it's not there then run fetchPet and get it
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🍥</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    // carousel is passed images as props
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
          <button>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </h2>
      </div>
    </div>
  );
};

export default Details;
