import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Custom styles for Tailwind CSS
const markdownStyles = {
  h1: "text-3xl font-bold mb-4",
  h2: "text-xl font-bold mb-4",
  h3: "text-lg font-bold mb-4",
  p: "mb-2",
  ul: "list-disc list-inside ml-6 mb-2",
  ol: "list-decimal list-inside ml-6 mb-2",
  li: "mb-1",
  code: "bg-gray-100 rounded p-2",
  blockquote: "border-l-4 border-gray-500 pl-4 italic",
  a: "text-blue-500 underline",
};

export function MarkdownRenderer(props: { markdown: string }) {
  return (
    <ReactMarkdown
      children={props.markdown}
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => (
          <h1 className={markdownStyles.h1} {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className={markdownStyles.h2} {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className={markdownStyles.h3} {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className={markdownStyles.p} {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className={markdownStyles.ul} {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className={markdownStyles.ol} {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className={markdownStyles.li} {...props} />
        ),
        code: ({ node, ...props }) => (
          <code className={markdownStyles.code} {...props} />
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote className={markdownStyles.blockquote} {...props} />
        ),
        a: ({ node, ...props }) => (
          <a className={markdownStyles.a} {...props} />
        ),
      }}
    />
  );
}
