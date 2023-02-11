import React, { useState } from "react";
import "../App.css";

function Section1() {
  // useState hook to create a state variable and set its initial value
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  return (
    <section className="Days">
      <h2 className="section-heading">Date: January 19, 2023</h2>
      <ol className="homePage-OL">
        <li className="homePage-List"> The App component explained</li>
        <p className="sub-topic">
          {" "}
          This is the main component which imports and renders the children
          components
        </p>
        <ul>
          <li className="homePage-List">
            It uses the react-router-dom library for routing. The code imports
            various components from the react-router-dom library, including
            Routes, Route, and Link.
          </li>

          <li className="homePage-List">
            function App() is the main component of the application. It maps
            through the topDesserts array and creates a list of items in the
            format of title - price.
          </li>
        </ul>
        {/* Conditionally render or hide the rest of the section based on the value of isExpanded or isHidden state */}
        {!isExpanded && (
          <div className="read-more" onClick={() => setIsExpanded(true)}>
            Show more
            {/* only render this div if isExpanded is false */}
          </div>
        )}
        {isExpanded && !isHidden && (
          <div>
            <li className="homePage-List">
              Transforming Lists with map Method
            </li>
            <p className="sub-topic">
              Here I learned how to transform lists in React using the{" "}
              <code> Map() </code> method to display only what I want the users
              to see on the UI. The steps are as follows:
            </p>
            <ul>
              <li className="homePage-List">
                The topDesserts array is a variable that is being used to store
                an array of JavaScript objects. Each object represents a dessert
                and contains properties such as id, title, description,
                calories, image, price, and createdAt
              </li>
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
            <div>
              <section>
                <h2 className="section-heading">Date: January 20, 2023</h2>
                <ol className="homePage-OL">
                  <li className="homePage-List">
                    {" "}
                    Worked on Show/ Hide function
                  </li>
                  <p className="sub-topic">
                    {" "}
                    So, I worked on toggling between show more and show less. It
                    took a while but I finally got it.
                  </p>
                  <div>
                    <li className="homePage-List">React Hooks</li>
                    <p className="sub-topic"></p>
                    <ul>
                      <li className="homePage-List">
                        using the React Hooks "useState" to manage the state of
                        two variables, "isExpanded" and "isHidden". It is using
                        a ternary operator to conditionally render JSX elements
                        based on the values of these two state variables.
                      </li>
                      <li className="homePage-List">
                        When the page first loads, the "isExpanded" state
                        variable is set to "false" and the "isHidden" state
                        variable is set to "false" . When the user clicks on the
                        "Show more" button, the "isExpanded" state variable is
                        set to "true" and the JSX elements inside the first
                        ternary operator will be rendered.
                      </li>
                      <li className="homePage-List">
                        When the user clicks on the "show less" button, the
                        "isHidden" state variable is set to "true" and the JSX
                        elements inside the first ternary operator will be
                        hidden.
                      </li>
                    </ul>
                  </div>
                </ol>
              </section>
            </div>
            <br />
            <div>
              <section>
                <h2 className="section-heading">Date: January 28, 2023</h2>
                <ol className="homePage-OL">
                  <li className="homePage-List">
                    {" "}
                    Mapping with the filter() and sort() methods
                  </li>
                  <p className="sub-topic">
                    {" "}
                    In this practice session, I mapped through an array of
                    desserts list and eleminated elements from the list using
                    filtering and sorting.
                  </p>
                  <div>
                    <li className="homePage-List">
                      The Filter() and Sort() Method
                    </li>
                    <p className="sub-topic"></p>
                    <ul>
                      <li className="homePage-List">
                        The filter() method was used to create a copy of the
                        array to filter and eliminate and only display the
                        elements that fulfill the condition pass the test.
                      </li>
                      <li className="homePage-List">
                        The sort() method was used to sort the list in ascending
                        order using a comparison function provided.
                      </li>
                    </ul>
                    <br />
                  </div>
                </ol>
              </section>
            </div>
            <br />
            <div>
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
                    was able to open the command line to practice what I learned
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

export default Section1;
