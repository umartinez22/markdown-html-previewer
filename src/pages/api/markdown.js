import markdownit from "markdown-it";

export default function markdownToHtml(req, res) {
  let markdownText = req.body.markdown;

  res.status(200).json({ html: markdownit().render(markdownText) });
}
