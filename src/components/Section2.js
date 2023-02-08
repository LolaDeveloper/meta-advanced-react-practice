import React, { useState } from "react";
import "../App.css";

function Section2() {
  // useState hook to create a state variable and set its initial value
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  return (
    <section className="Days">
      <h2 className="section-heading">Date: February 05-08, 2023</h2>
      <ol className="homePage-OL">
        <li className="homePage-List">
          {" "}
          Controlled Components and Forms Practice
        </li>
        <p className="sub-topic">
          {" "}
          I did some practice on controlled components and forms in React. Some
          things were not newof course, but I implemented several new concepts.
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
            <p className="sub-topic">
              {" "}
              So, for the practice, the course provided the form layout and
              styling and the main task was to add new code to make the
              uncontrolled format into controlled. The most challenging part was
              using the focus event "onBlur" to check when the input field for
              password loses focus and display an error message if password
              length is less than 8
            </p>
            <ul>
              <li className="homePage-List">
                The first step was really easy- adding the value and onChange
                attributes to the form elements.
              </li>
              <li className="homePage-List">
                {" "}
                The password state is a special one that has an additional
                property called `isTouched`. This property is used to determine
                if the user has interacted with the input or not.{" "}
              </li>
              <li className="homePage-List">
                Finally, the code includes a conditional statement that checks
                whether the "isTouched" property of the "password" state object
                is true and the length of the password value is less than 8
                characters. If both conditions are met, it renders a
                "PasswordErrorMessage" component. Otherwise, it returns "null".
                This means that the error message will only be displayed when
                the password field has been touched (i.e., the user has
                interacted with it) and the entered password value is less than
                8 characters long.
              </li>
              <li className="homePage-List">
                This means that the error message will only be displayed when
                the password field has been touched (i.e., the user has
                interacted with it) and the entered password value is less than
                8 characters long.
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
