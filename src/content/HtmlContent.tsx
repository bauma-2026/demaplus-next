export default function HtmlContent({ html }: { html?: string }) {
  if (!html) return null;

  // WP usually includes <p>, <h2>, <ul>, <img> etc.
  // We'll style it with prose and keep it simple.
  return (
    <div
      className="prose prose-neutral max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
