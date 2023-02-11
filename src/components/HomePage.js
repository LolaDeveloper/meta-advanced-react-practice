import "./HomePage.css";
// Importing the ThemeProvider and useTheme hooks from the ThemeContext file, which is used to manage the theme of the application.
import { ThemeProvider, useTheme } from "../ThemeContext";
// Importing the Switch component, which is used to toggle between light and dark themes.
import Switch from "../Switch";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Title = ({ children }) => {
  // Using the useTheme hook to access the theme from the ThemeContext.
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};

const Content = () => {
  return (
    <div>
      <Paragraph>
        <Section1 />
        <br />
        <Section2 />
        <Section3 />
      </Paragraph>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Title> Advanced React Journal</Title>

      <Switch />
      {/* Displaying the Switch component to toggle between light and dark themes. */}
    </header>
  );
};
// This is a functional component to display the main content of the "HomePage component".
const Page = () => {
  return (
    <div className="Page">
      <Title>
        {" "}
        I am documenting my Advance React practice and the things I am learning
        on here.
      </Title>
      <Content />
    </div>
  );
};
// This is the main component of this page.
function HomePage() {
  const { theme } = useTheme();

  return (
    <div
      className="HomePage"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Page />
    </div>
  );
}
// This is the top-level component of this file.
function Root() {
  // Returning a ThemeProvider component that wraps the HomePage component.
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

export default Root;
