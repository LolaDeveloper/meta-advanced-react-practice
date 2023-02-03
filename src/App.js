import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import KeysPractice from "./KeysPractice";
import List from "./List";
import LowCalories from "./LowCalories";

const topDesserts = [
  {
    id: "1",
    name: "Tiramisu",
    description: "The best tiramisu in town",
    calories: 400,
    image: "https://picsum.photos/200/300/?random",
    price: "$5.00",
    createdAt: "2023-01-19",
  },
  {
    id: "2",
    name: "Lemon Icecream",
    description: "Mind blowing taste",
    calories: 200,
    image: "https://picsum.photos/200/300/?random",
    price: "$4:50",
    createdAt: "2023-01-19",
  },
  {
    id: "3",
    name: "Chocolate mousse",
    description: "Yummy flavor",
    calories: 200,
    image: "https://picsum.photos/200/300/?random",
    price: "$6.00",
    createdAt: "2023-01-19",
  },
  {
    id: "4",
    name: "Cheesecake",
    description: "Literally melts in your mouth",
    calories: 600,
    image: "https://picsum.photos/200/300/?random",
    price: "$6.00",
    createdAt: "2023-01-19",
  },
];
function App() {
  const listItems = topDesserts.map((dessert) => {
    const itemText = `${dessert.name} - ${dessert.price}`;
    return <li> {itemText}</li>;
  });

  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">
          {" "}
          Home
        </Link>
        <Link to="/Lists" className="nav-item">
          {" "}
          Lists
        </Link>
        <Link to="/KeysP" className="nav-item">
          {" "}
          Keys
        </Link>
        <Link to="/Calories" className="nav-item">
          {" "}
          Calories
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Lists" element={<List dessertList={listItems} />} />
        <Route path="/KeysP" element={<KeysPractice />} />

        <Route path="/Calories" element={<LowCalories data={topDesserts} />} />
      </Routes>
    </div>
  );
}

export default App;
