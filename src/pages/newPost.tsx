import React, { useState } from "react";
import { useAuth } from "../lib/user_db";
import { Navigate, useNavigate } from "react-router-dom";
import { MarkdownRenderer } from "../components/markdown";
import { Post, createPost } from "../lib/posts_db";

export default function NewPostPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [previewToggle, setPreviewToggle] = useState(false);

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  const handleCreatePost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const post: Post = {
      title,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis, diam vitae ullamcorper lobortis, arcu nisi euismod leo, at bibendum ante lectus eu ipsum. Donec porta cursus sem, sit amet commodo orci placerat nec. ",
      content,
      tags: [],
      authorId: user.id,
    };
    createPost(post);
    navigate("/");
  };

  return (
    <>
      <div className="flex h-full w-full justify-center">
        <form
          className="flex h-[50%] w-[80%] flex-col items-center gap-3"
          onSubmit={handleCreatePost}
        >
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="placeholder-text input input-bordered w-full"
          />
          {previewToggle ? (
            <div className="markdown-preview h-full w-full">
              <MarkdownRenderer markdown={content} />
            </div>
          ) : (
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="placeholder-text textarea textarea-bordered h-full w-full"
              placeholder="Markdown content"
            />
          )}
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <label className="label" htmlFor="markdownToggle">
                <span className="label-text">Markdown Preview</span>
              </label>
              <input
                name="markdownToggle"
                type="checkbox"
                className="toggle"
                checked={previewToggle}
                onChange={() => setPreviewToggle((prevState) => !prevState)}
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
