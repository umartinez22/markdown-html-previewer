import { useContext } from "react";
import { MarkdownContext, ThemeContext } from "../../Contexts";

const DonwloadButton = ({ content }) => {
  const file = new Blob([content], { type: "text/html" });

  return (
    <a
      className="download-button"
      download="output.html"
      target="_blank"
      rel="noreferrer"
      href={URL.createObjectURL(file)}
    >
      Donwload As HTML
    </a>
  );
};

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
        <DonwloadButton content={markdownContext.htmlPreview} />
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
