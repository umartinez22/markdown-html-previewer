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

export default DonwloadButton;
