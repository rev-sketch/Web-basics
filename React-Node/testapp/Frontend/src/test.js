import React from "react";
// import ReactDOM from "react-dom/client";

function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function App() {
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car brand={car.brand} />
        ))}
      </ul>
    </>
  );
}

export default App;
