import React, { useState } from "react";
import "../App.css";

function Section2() {
  // useState hook to create a state variable and set its initial value
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  return (
    <section className="Days">
      <h2 className="section-heading">Date: January 20, 2023</h2>
      <ol className="homePage-OL">
        <li className="homePage-List"> Worked on Show/ Hide function</li>
        <p className="sub-topic">
          {" "}
          So, I worked on toggling between show more and show less. It took a
          while but I finally got it.
        </p>

        {/* Conditionally render or hide the rest of the section based on the value of isExpanded or isHidden state */}
        {!isExpanded && (
          <div className="read-more" onClick={() => setIsExpanded(true)}>
            Show more
          </div>
        )}
        {isExpanded && !isHidden && (
          <div>
            <li className="homePage-List">React Hooks</li>
            <p className="sub-topic"></p>
            <ul>
              <li className="homePage-List">
                using the React Hooks "useState" to manage the state of two
                variables, "isExpanded" and "isHidden". It is using a ternary
                operator to conditionally render JSX elements based on the
                values of these two state variables.
              </li>
              <li className="homePage-List">
                When the page first loads, the "isExpanded" state variable is
                set to "false" and the "isHidden" state variable is set to
                "false" . When the user clicks on the "Show more" button, the
                "isExpanded" state variable is set to "true" and the JSX
                elements inside the first ternary operator will be rendered.
              </li>
              <li className="homePage-List">
                When the user clicks on the "show less" button, the "isHidden"
                state variable is set to "true" and the JSX elements inside the
                first ternary operator will be hidden.
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
