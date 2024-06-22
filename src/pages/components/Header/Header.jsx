import { useContext } from "react";
import { ThemeContext } from "../../Contexts";

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
  {
    id: "2",
    name: "Green Sea",
    primaryColor: "#16a085",
    secondaryColor: "#1abc9c",
  },
  {
    id: "3",
    name: "Sun Flower",
    primaryColor: "#f39c12",
    secondaryColor: "#f1c40f",
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
          value={themeContext.default.id}
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
