import { useState, useEffect } from "react";
const ANIMALS = ["bird", "dog", "cat", "rabbit", "reptile"];

const SearchParams = () => {
  // variable, function called to update state, and default value given for state
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const breeds = [];

  useEffect(() => {
    requestPets();
  });

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
  }
  return (
    <div className="search-params">
      <form>
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
    </div>
  );
};

export default SearchParams;