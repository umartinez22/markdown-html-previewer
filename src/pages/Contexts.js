import { createContext } from "react";

const markdownContextData = { htmlPreview: "" };

const themeContextData = {
  default: {
    id: "1",
    name: "Belize Hole",
    primaryColor: "#2980b9",
    secondaryColor: "#3498db",
  },
};

export const MarkdownContext = createContext(markdownContextData);
export const ThemeContext = createContext(themeContextData);
