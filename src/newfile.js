function HomePage() {
  // useState hook to create a state variable and set its initial value
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      <h1 className="homePage-title">Advanced React Journal</h1>
      <h2 className="homePage-topic">
        {" "}
        I am documenting my Advance React practice and the things I am learning
        on here. I started
      </h2>
      <section className="Day-one">
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

          {/* Conditionally render the "Transforming Lists with map Method" section based on the value of isExpanded state */}
          {isExpanded ? (
            <div>
              <li className="homePage-List">
                {" "}
                Transforming Lists with map Method
              </li>
              <p className="sub-topic">
                Here I learned how to transform lists in React using the{" "}
                <code> Map() </code> method to display only what I want the
                users to see on the UI. The steps are as follows:
              </p>
              <ul>
                <li className="homePage-List">
                  The topDesserts array is a variable that is being used to
                  store an array of JavaScript objects. Each object represents a
                  dessert and contains properties such as id, title,
                  description, calories, image, price, and createdAt
                </li>
                <li className="homePage-List">
                  The const keyword is used to declare the variable, indicating
                  that the variable's value cannot be reassigned. In this case,
                  it means that the topDesserts variable will always refer to
                  the same array, but the properties of the objects within the
                  array can be modified.
                </li>
                <li className="homePage-List">
                  The array is also It's used as a data source and can be used
                  to populate the list of desserts on the page, for example.
                  This array is defined outside of any function or component, so
                  it will be accessible throughout the entire application.
                </li>
                <li className="homePage-List">
                  Then function App() maps through the topDesserts array and
                  creates a list of items in the format of title - price. It
                  does this through const listItems which is a variable that is
                  being used to store the result of calling the map method on
                  the topDesserts array
                </li>
                <li className="homePage-List">
                  The map method is an array method in JavaScript that creates a
                  new array with the results of calling a provided function on
                  every element in the calling array. In this case, the function
                  passed to the map method is an arrow function that takes in a
                  dessert argument and returns a list item with the text in the
                  format of title - price.
                </li>
                <li className="homePage-List">
                  The map method is used to iterate through the topDesserts
                  array, and for each dessert object, it calls the function
                  passed to it and creates a new array with the results of that
                  function call. In addition, the map() method creates a new
                  array with the result of the function call, it doesn't modify
                  the original array
                </li>
                <li className="homePage-List">
                  For example, if the first object in the topDesserts array has
                  the title "Tiramisu" and the price "$5.00", the function
                  passed to the map method would return a list item with the
                  text Tiramisu - $5.00.
                </li>
                <li className="homePage-List">
                  The result of the map method call is then assigned to the
                  listItems variable. This variable holds an array of list
                  items, each with a text containing the title and price of a
                  dessert from the topDesserts array.
                </li>
                <li className="homePage-List">
                  listItems is then passed as a prop to the List component, it
                  can be used in that component to render the list of desserts
                  in the UI.
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
                  to insert the dessertList prop, which is passed as the value
                  of the dessertList property of the props object.
                </li>
                <li>
                  In summary, the List component receives the dessertList prop,
                  which is an array of list items, and renders it as an
                  unordered list in the UI.
                </li>
              </ul>
            </div>
          ) : (
            <div className="read-more" onClick={() => setIsExpanded(true)}>
              Read More
            </div>
          )}
        </ol>
      </section>
    </div>
  );
}

export default HomePage;
