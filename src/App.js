import { useState } from "react";
import "./App.css";

export default function App() {
  const indianList = [
    { name: "Butter Chicken", rating: "4.5/5" },
    { name: "Chole Bhature", rating: "4/5" },
    { name: "Rogan Josh", rating: "4.5/5" },
    { name: " Chicken Dum Biryani", rating: "4/5" }
  ];
  const mexicanList = [
    { name: "Tacos al pastor", rating: "4/5" },
    { name: "Elote", rating: "4.5/5" },
    { name: "Guacamole", rating: "4/5" }
  ];
  const lebaneseList = [
    { name: "Hummus", rating: "3.5/5" },
    { name: " Fattoush", rating: "5/5" },
    { name: " Rice Pilaf", rating: "4.5/5" }
  ];
  const [listName, setListName] = useState(indianList);

  const jsHandeler = () => {
    setListName(indianList);
  };

  const fictionHandeler = () => {
    setListName(mexicanList);
  };

  const businessHandeler = () => {
    setListName(lebaneseList);
  };

  return (
    <div className="App">
      <h1>🍗GoodFood🍕</h1>
      <p>Checkout my favorite food. Select a cusine to get started</p>
      <button onClick={jsHandeler}>Indian</button>
      <button onClick={fictionHandeler}>Mexican</button>
      <button onClick={businessHandeler}>Lebanese</button>
      <hr style={{ width: 890 }}></hr>
      <ul>
        {listName.map((value, index) => {
          return (
            <div key={index} className="borderList">
              <li>{value.name}</li>
              <p>{value.rating}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
