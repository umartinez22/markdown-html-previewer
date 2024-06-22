import { useEffect, useState } from "react";

const MarkdownContainer = (props) => {
  let [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight - 80);

    window.onresize = function () {
      setHeight(window.innerHeight - 80);
    };
  }, []);

  return (
    <div className="markdowns-container" style={{ height }}>
      {props.children}
    </div>
  );
};

export default MarkdownContainer;
