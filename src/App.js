import logo from "./logo.svg";
import "./App.css";
import { Prodocts } from "./products";
function App() {
  return (
    <div>
      {Products.map((element) => (
        <>
          <h1>{element.name}</h1>
          <h3>{element.price}</h3>
          <img src={element.image} width="20%" />
        </>
      ))}
    </div>
  );
}

export default App;
