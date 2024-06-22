import { useContext } from "react";
import { ThemeContext } from "../../../Contexts";

const themes = [
  {
    id: "0",
    name: "Mid Night",
    primaryColor: "#2c3e50",
    secondaryColor: "#34495e",
  },
  {
    id: "1",
    name: "Belize Hole",
    primaryColor: "#2980b9",
    secondaryColor: "#3498db",
  },
];

const Header = ({ onChangeTheme }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      className="header"
      style={{ backgroundColor: themeContext.default.primaryColor }}
    >
      <h3 className="title">Markdown Previewer</h3>
      <div>
        <span className="title">Theme: </span>
        <select
          onChange={(e) =>
            onChangeTheme(
              themes.filter((item) => item.id === e.target.value)[0]
            )
          }
        >
          {themes.map((theme) => (
            <option key={theme.id} value={theme.id}>
              {theme.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Header;
