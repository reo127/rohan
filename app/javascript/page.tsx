
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Page = () => {
  const mdFilePath = path.join(process.cwd(), "public", "javascript.md");
  const mdContent = fs.readFileSync(mdFilePath, "utf-8");

  return (
    <div className="prose mx-auto p-4 mt-16">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{mdContent}</ReactMarkdown>
    </div>
  );
};

export default Page;
