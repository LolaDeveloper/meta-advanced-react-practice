import "./Styles.css";
import { useTheme } from "../ThemeContext";

// This is the component designed to display a toggle to change between light and dark themes..
const Switch = () => {
  // Using the useTheme hook to access the theme from the ThemeContext.
  const { theme, toggleTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
