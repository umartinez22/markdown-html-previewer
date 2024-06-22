import { useContext } from "react";
import { MarkdownContext, ThemeContext } from "../../../utils/contexts";
import DonwloadButton from "../DownloadButton";

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
