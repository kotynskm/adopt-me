// import ReactDOM from "react-dom";
// will import only createRoot instead of ReactDOM since we are only using createRoot
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

// create App
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};
// get the div with the ID root, create the root using this container, render our App
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
