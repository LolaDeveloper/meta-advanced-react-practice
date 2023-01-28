import React from "react";

function LowCalories(props) {
  const lowCalories = props.data
    .filter((dessert) => {
      return dessert.calories < 500;
    })
    .sort((a, b) => {
      return a.calories - b.calories;
    })
    .map((dessert) => {
      return (
        <li>
          {dessert.name} - {dessert.calories} cal
        </li>
      );
    });

  return (
    <div>
      <h2> List of Low calories desserts are:</h2>
      <ul> {lowCalories}</ul>
    </div>
  );
}

export default LowCalories;
