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
            <div>
              <br />
              <section>
                <h2 className="section-heading">Date: February 02 & 03 2023</h2>
                <ol className="homePage-OL">
                  <li className="homePage-List">
                    {" "}
                    Some practice with React "Keys"
                  </li>
                  <p className="sub-topic">
                    {" "}
                    On February 2nd, I followed the example in the tutorial and
                    did some practice on using keys within a simple todo list
                    components.
                    <br />
                    Then, I found that some codes I had on my old laptop were
                    not updated to GitHub so I set out to to recover them and
                    merge which resulted in conflicts in the GUI. This is worthy
                    of mention because I was able to open the comman line to
                    practice what I learned on the version control course to see
                    what is causing the merge issue.
                  </p>
                  <ul>
                    <li className="homePage-List">
                      The component uses the useState hook to initialize the
                      todos state with an array of two to-do items. The setTodos
                      function is used to update the todos. state.
                    </li>
                    <li className="homePage-List">
                      The practice included returning the reverse() method in a
                      function called reverseOrder which, when called, will
                      reverse the order of the todos array by using the spread
                      operator (...) to spread the todos array into a new array,
                      which is then reversed using the reverse method. The
                      updated array is then set as the new state using setTodos.
                      The reverse() method is an array method in JavaScript that
                      reverses the order of the elements in an array. The
                      original array is modified and the order of the elements
                      is reversed.
                    </li>
                    <li className="homePage-List">
                      The reverse() method is an array method in JavaScript that
                      reverses the order of the elements in an array. The
                      original array is modified and the order of the elements
                      is reversed.
                    </li>
                  </ul>
                  <p className="sub-topic">
                    Upon trying to push and commit to Master, I found that some
                    codes I had on my old laptop were not updated to GitHub so I
                    set out to to recover them and merge which resulted in
                    conflicts in the GUI. This is worthy of mention because I
                    was able to open the comman line to practice what I learned
                    on the version control course to see what is causing the
                    merge issue. issues finally resolved and all files
                    recovered.
                  </p>
                </ol>
              </section>
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

export default Section3;
