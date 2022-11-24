// import ReactDOM from "react-dom";
// will import only createRoot instead of ReactDOM since we are only using createRoot
import { createRoot } from "react-dom/client";
import Pet from "./Pet";

// create App
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Golden Retriever" />
      <Pet name="Mango" animal="Bird" breed="Caique" />
      <Pet name="Felix" animal="Cat" breed="Short Hair Tabby" />
    </div>
  );
};
// get the div with the ID root, create the root using this container, render our App
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
