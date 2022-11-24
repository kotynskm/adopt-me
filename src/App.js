// make pet component
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.breed),
    React.createElement("h2", {}, props.animal),
  ]);
};

// create App
const App = () => {
  // create a div element with an h1 child element with text "Adopt Me!"
  // NO ONE WRITES REACT LIKE THIS ANYMORE - WE USE JSX, but this is what it looks liked rendered out.
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    // create some pet elements
    React.createElement(Pet, {
      name: "Luna",
      breed: "Short Hair",
      animal: "Cat",
    }),
    React.createElement(Pet, {
      name: "Felix",
      breed: "Russian Blue",
      animal: "Cat",
    }),
    React.createElement(Pet, {
      name: "Mango",
      breed: "Caique",
      animal: "Bird",
    }),
  ]);
};
// get the div with the ID root, create the root using this container, render our App
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
