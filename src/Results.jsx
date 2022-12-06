import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets found.</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            // we could use the ...pet spread operator, but it is not good practice in case things could change in the code
            // it's better to explicitly define as below
            animal={pet.animal}
            id={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
