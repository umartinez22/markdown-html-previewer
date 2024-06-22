import { useContext } from "react";
import { MarkdownContext, ThemeContext } from "../../../Contexts";

const MarkdownPreview = () => {
  let markdownContext = useContext(MarkdownContext);
  let themeContext = useContext(ThemeContext);

  return (
    <div className="markdown-container">
      <div
        className="title"
        style={{ backgroundColor: themeContext.default.secondaryColor }}
      >
        <span>Preview</span>
        <button>Donwload As HTML</button>
      </div>
      <div
        className="preview"
        style={{ overflowY: "scroll" }}
        dangerouslySetInnerHTML={{ __html: markdownContext.htmlPreview }}
      ></div>
    </div>
  );
};

export default MarkdownPreview;
