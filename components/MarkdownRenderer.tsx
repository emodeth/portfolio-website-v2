import React from "react";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  children: string;
  className?: string;
}

const getHeadingId = (children: React.ReactNode): string => {
  if (!children) return "";
  let text = "";
  if (typeof children === "string" || typeof children === "number") {
    text = String(children);
  } else if (Array.isArray(children)) {
    text = children.map(c => {
      if (typeof c === "string" || typeof c === "number") return c;
      if (React.isValidElement(c)) {
        return getHeadingId((c as React.ReactElement<any>).props.children);
      }
      return "";
    }).join("");
  } else if (React.isValidElement(children)) {
    text = getHeadingId((children as React.ReactElement<any>).props.children);
  }
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
};

const defaultComponents: Components = {
  h1: ({ children }) => {
    const id = getHeadingId(children);
    return (
      <h1 id={id} className="text-[16px] font-bold text-gray-1200 mt-12 mb-6 tracking-tight scroll-mt-24">
        {children}
      </h1>
    );
  },
  h2: ({ children }) => {
    const id = getHeadingId(children);
    return (
      <h2 id={id} className="text-[16px] font-bold text-gray-1200 mt-12 mb-6 tracking-tight flex items-center gap-2 scroll-mt-24">
        {children}
      </h2>
    );
  },
  h3: ({ children }) => {
    const id = getHeadingId(children);
    return (
      <h3 id={id} className="text-[16px] font-bold text-gray-1200 mt-8 mb-4 tracking-tight scroll-mt-24">
        {children}
      </h3>
    );
  },
  h4: ({ children }) => {
    const id = getHeadingId(children);
    return (
      <h4 id={id} className="text-[16px] font-bold text-gray-1200 mt-6 mb-3 scroll-mt-24">
        {children}
      </h4>
    );
  },
  p: ({ children }) => (
    <p className="text-[16px] leading-7 text-text-paragraph mb-6 last:mb-0 has-[>strong:first-child]:mb-2">
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-gray-1200">{children}</strong>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-text-paragraph marker:text-gray-500">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-text-paragraph marker:text-gray-500">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1 text-gray-1100">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 bg-muted/30 rounded-r-lg italic text-gray-1100">
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => (
    <a
      href={href as string}
      className="text-primary hover:text-primary/80 transition-colors font-medium underline underline-offset-4 decoration-primary/30 hover:decoration-primary"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  code: ({ children, className, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    const isInline = !match && !children?.toString().includes("\n");
    return isInline ? (
      <code className="bg-muted/50 px-1.5 py-0.5 rounded text-sm font-mono text-gray-1200 border border-border/50">
        {children}
      </code>
    ) : (
      <div className="relative my-8 rounded-lg overflow-hidden border border-border bg-[#1e1e1e]">
        <div className="flex items-center justify-between px-4 py-2 bg-muted/20 border-b border-border/10">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>
          {match?.[1] && (
            <span className="text-xs text-gray-500 font-mono uppercase">
              {match[1]}
            </span>
          )}
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300">
          <code className={className} {...props}>
            {children}
          </code>
        </pre>
      </div>
    );
  },
  table: ({ children }) => (
    <div className="my-8 w-full overflow-hidden rounded-lg border border-border bg-card shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse">
          {children}
        </table>
      </div>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-muted/50 text-gray-1200 border-b border-border">
      {children}
    </thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-border/40 bg-card text-gray-1100">
      {children}
    </tbody>
  ),
  tr: ({ children }) => (
    <tr className="group hover:bg-muted/30 transition-colors duration-200">
      {children}
    </tr>
  ),
  th: ({ children }) => (
    <th className="px-6 py-4 font-semibold text-gray-1200 whitespace-nowrap tracking-wide text-xs uppercase opacity-80">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-6 py-4 align-top group-hover:text-gray-1200 transition-colors">
      {children}
    </td>
  ),
  hr: () => <hr className="my-12 border-border" />,
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="rounded-lg border border-border my-8 w-full shadow-md hover:shadow-lg transition-shadow duration-300"
    />
  ),
};

const MarkdownRenderer = ({ children, className = "" }: MarkdownRendererProps) => {
  return (
    <div className={`prose max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={defaultComponents}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
