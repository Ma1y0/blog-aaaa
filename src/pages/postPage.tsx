import { useParams } from "react-router-dom";
import { MarkdownRenderer } from "../components/markdown";
import { useState } from "react";
import { getPost } from "../lib/posts_db";

export default function PostPage() {
  const { title } = useParams();

  const [post] = useState(getPost(title!));

  return (
    <div className="flex h-full w-full flex-col items-center gap-3">
      <h1 className="text-5xl font-bold">{title}</h1>
      <div className="w-[80%]">
        <MarkdownRenderer markdown={post.content} />
      </div>
    </div>
  );
}
