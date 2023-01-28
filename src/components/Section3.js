import React, { useState } from "react";
import "../App.css";

function Section3() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  return (
    <section className="Days">
      <h2 className="section-heading">Date: January 28, 2023</h2>
      <ol className="homePage-OL">
        <li className="homePage-List">
          {" "}
          Mapping with the filter() and sort() methods
        </li>
        <p className="sub-topic">
          {" "}
          In this practice session, I mapped through an array of desserts list
          and eleminated elements from the list using filtering and sorting.
        </p>

        {/* Conditionally render or hide the rest of the section based on the value of isExpanded or isHidden state */}
        {!isExpanded && (
          <div className="read-more" onClick={() => setIsExpanded(true)}>
            Show more
          </div>
        )}
        {isExpanded && !isHidden && (
          <div>
            <li className="homePage-List">The Filter() and Sort() Method</li>
            <p className="sub-topic"></p>
            <ul>
              <li className="homePage-List">
                The filter() method was used to create a copy of the array to
                filter and eliminate and only display the elements that fulfill
                the condition pass the test.
              </li>
              <li className="homePage-List">
                The sort() method was used to sort the list in ascending order
                using a comparison function provided.
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

export default Section3;
