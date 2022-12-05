import { useState, useEffect } from "react";
import Pet from "./Pet";
const ANIMALS = ["bird", "dog", "cat", "rabbit", "reptile"];

const SearchParams = () => {
  // variable, function called to update state, and default value given for state
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const breeds = [];

  // putting the empty [] after, makes it call it only once after render (otherwise will continue to re-render upon any change, and this is not what we want)
  useEffect(() => {
    requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          ></input>
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
          <label htmlFor="breed">
            Breed
            <select
              id="breed"
              disabled={breeds.length === 0}
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            >
              <option />
              {breeds.map((breed) => (
                <option key={breed}>{breed}</option>
              ))}
            </select>
          </label>
        </label>
        <button>Submit</button>
      </form>
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        />
      ))}
    </div>
  );
};

export default SearchParams;
