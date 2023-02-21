import React, { useState } from "react";
import "../App.css";

function Section4() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  return (
    <section className="Days">
      <h2 className="section-heading">Date: February 21</h2>
      <ol className="homePage-OL">
        <li className="homePage-List"> Managing State Within a Component</li>
        <p className="sub-topic">
          {" "}
          After revising useState hook andlearning about working with primitive
          (string) data and with complex data (state stored in objects), I
          worked on a code lab session to practice updating the state stored in
          an object, based on the user interacting with the app. The starter
          code was already provided and the task was to complete the
          evnt-handling function so that when a button is clicked, the UI
          updates.
        </p>

        {/* Conditionally render or hide the rest of the section based on the value of isExpanded or isHidden state */}
        {!isExpanded && (
          <div className="read-more" onClick={() => setIsExpanded(true)}>
            Show more
          </div>
        )}
        {isExpanded && !isHidden && (
          <div>
            <li className="homePage-List">
              Invoking the state-updating function
            </li>
            <p className="sub-topic"></p>
            <ul>
              <li className="homePage-List">
                The first step was to invoke the state-updating function inside
                another function and pass in arrow function with a single
                parameter, named prevState.
              </li>
              <li className="homePage-List">
                After that a copy of the prevState object was returned with the
                rest operator and then the the key-value pairs that already
                exist on the state object that were initially passes to the
                useState function were updated
              </li>
            </ul>
            <div>
              <br />
            </div>

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

export default Section4;
