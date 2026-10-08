import React from 'react';
import ReactMarkdown from 'react-markdown';

interface Props {
  content: string;
  className?: string;
}

export const MarkdownContent: React.FC<Props> = ({ content, className = '' }) => {
  return (
    <div
      className={`prose prose-slate max-w-none text-slate-800 leading-relaxed text-[15px] ${className}`}
    >
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-xl font-bold text-slate-900 mt-4 mb-2 pb-1 border-b border-slate-200">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-lg font-bold text-indigo-900 mt-4 mb-2 flex items-center gap-1.5">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-base font-semibold text-slate-800 mt-3 mb-1.5">
              {children}
            </h3>
          ),
          p: ({ children }) => <p className="mb-2.5 last:mb-0">{children}</p>,
          ul: ({ children }) => (
            <ul className="list-disc pl-5 mb-3 space-y-1 text-slate-700">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-5 mb-3 space-y-1 text-slate-700">{children}</ol>
          ),
          li: ({ children }) => <li className="pl-0.5">{children}</li>,
          strong: ({ children }) => (
            <strong className="font-semibold text-indigo-950 bg-indigo-50/70 px-1 py-0.5 rounded">
              {children}
            </strong>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-indigo-400 bg-indigo-50/50 pl-3.5 py-1.5 my-2.5 rounded-r text-slate-700 italic">
              {children}
            </blockquote>
          ),
          code: ({ children, className: codeClassName }) => {
            const isBlock = codeClassName?.includes('language-');
            if (isBlock) {
              return (
                <div className="my-2.5 rounded-lg bg-slate-900 text-slate-100 p-3 overflow-x-auto text-xs sm:text-sm font-mono border border-slate-800 shadow-sm">
                  <code>{children}</code>
                </div>
              );
            }
            return (
              <code className="bg-slate-100 text-rose-600 px-1.5 py-0.5 rounded text-[13px] font-mono font-medium border border-slate-200">
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
