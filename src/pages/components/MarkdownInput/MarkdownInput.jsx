import { useContext } from "react";
import { ThemeContext } from "../../../utils/contexts";

const MarkdownInput = ({ onTransformMarkdown }) => {
  let themeContext = useContext(ThemeContext);

  function onChange(markdown) {
    fetch("/api/markdown", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ markdown }),
    })
      .then((response) => response.json())
      .then((data) => onTransformMarkdown(data));
  }

  return (
    <div className="markdown-container">
      <div
        className="title"
        style={{ backgroundColor: themeContext.default.secondaryColor }}
      >
        Markdown
      </div>
      <textarea onChange={(e) => onChange(e.target.value)}></textarea>
    </div>
  );
};

export default MarkdownInput;
