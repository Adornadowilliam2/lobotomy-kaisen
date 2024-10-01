import "./App.css";
import { data } from "./index.js";

function App() {
  return (
    <>
      <div>
        <h1>These were truly our lobotomy kaisen 😭🙏</h1>
        <div className="card-container">
          {data.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
