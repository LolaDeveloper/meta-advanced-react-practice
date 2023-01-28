import React, { useState } from "react";
import "../App.css";

function Section2() {
  // useState hook to create a state variable and set its initial value
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  return (
    <section className="Day1">
      <h2 className="section-heading">Date: January 20, 2023</h2>
      <ol className="homePage-OL">
        <li className="homePage-List"> Worked on Show/ Hide function</li>
        <p className="sub-topic">
          {" "}
          So, I worked on toggling between show more and show less. It took a
          while but I finally got it.
        </p>
        <ul>
          <li className="homePage-List"></li>

          <li className="homePage-List"></li>
        </ul>
        {/* Conditionally render or hide the rest of the section based on the value of isExpanded or isHidden state */}
        {!isExpanded && (
          <div className="read-more" onClick={() => setIsExpanded(true)}>
            Show more
          </div>
        )}
        {isExpanded && !isHidden && (
          <div>
            <li className="homePage-List">Toggling components</li>
            <p className="sub-topic"></p>
            <ul>
              <li className="homePage-List"></li>
              <li className="homePage-List">
                The const keyword is used to declare the variable, indicating
                that the variable's value cannot be reassigned. In this case, it
                means that the topDesserts variable will always refer to the
                same array, but the properties of the objects within the array
                can be modified.
              </li>
              <li className="homePage-List">
                The array is also It's used as a data source and can be used to
                populate the list of desserts on the page, for example. This
                array is defined outside of any function or component, so it
                will be accessible throughout the entire application.
              </li>
              <li className="homePage-List">
                Then function App() maps through the topDesserts array and
                creates a list of items in the format of title - price. It does
                this through const listItems which is a variable that is being
                used to store the result of calling the map method on the
                topDesserts array
              </li>
              <li className="homePage-List">
                listItems is then passed as a prop to the List component, it can
                be used in that component to render the list of desserts in the
                UI.
              </li>
            </ul>
            <li className="homePage-List"> The List Component</li>
            <p className="sub-topic">
              {" "}
              The List function is a React component that takes in a single
              argument, props. props is an object that contains properties
              passed down to the component from its parent. In this case, the
              parent component is passing down the dessertList prop.
            </p>
            <ul>
              <li className="homePage-List">
                The List component receives the array of list items that was
                created in the App component and stored in the listItems
                variable, and it renders it as an unordered list.
              </li>
              <li className="homePage-List">
                The component's function returns JSX that renders an unordered
                list "ul" element. Inside the element, it uses curly braces {}{" "}
                to insert the dessertList prop, which is passed as the value of
                the dessertList property of the props object.
              </li>
              <li>
                In summary, the List component receives the dessertList prop,
                which is an array of list items, and renders it as an unordered
                list in the UI.
              </li>
            </ul>
            <div
              className="hide-section"
              onClick={() => setIsHidden(setIsExpanded)}
            >
              show less
            </div>
          </div>
        )}
      </ol>
    </section>
  );
}

export default Section2;
