import React, { useState } from "react";
import "../App.css";

function Section3() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  return (
    <section className="Days">
      <h2 className="section-heading">Date: February 09-11 </h2>
      <ol className="homePage-OL">
        <li className="homePage-List">
          {" "}
          Working with useContext, States and Props
        </li>
        <p className="sub-topic">
          {" "}
          This was an indepth lesson about React Context and how it allows you
          to define global state without passing individual props down through
          each component. As one of the common use cases for Context is to
          define a theme for your application, there was an assignment to create
          a themable user interface in React to allow the user to switch between
          a light and dark theme.
        </p>

        {/* Conditionally render or hide the rest of the section based on the value of isExpanded or isHidden state */}
        {!isExpanded && (
          <div className="read-more" onClick={() => setIsExpanded(true)}>
            Show more
          </div>
        )}
        {isExpanded && !isHidden && (
          <div>
            <li className="homePage-List">The Practice Set-up</li>
            <p className="sub-topic">
              {" "}
              A starter code which includes all the necessary UI elements, as
              well as the switch component to toggle the theme was provided.
              However, the provided 'themeContext' was hardcoded to a fixed
              theme (light), with the task to make it toggleable.
            </p>
            <ul>
              <li className="homePage-List">
                The first step was to implement the ThemeProvider component that
                uses the React.useState hook to manage the state of the theme.
                It starts with a default theme of "light".
              </li>
              <li className="homePage-List">
                State was created to hold the theme and a ThemeContext.Provider
                was created with a new context object, ThemeContext, using
                createContext, a fuction imported from React.
              </li>
              <li className="homePage-List">
                Then the ThemeContext.Provider component was returned inside the
                ThemeProvider component, with the value of theme and a toggle
                function and wrapping the children. All other implementations
                were done in the Switch component and also implementation of
                theuseTheme hook was quite easy.
              </li>
            </ul>
            <div></div>

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

export default Section3;
