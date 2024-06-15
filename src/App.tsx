import { useState } from "react";
import { Post, getPosts } from "./lib/posts_db";

export default function App() {
  const [posts, setPosts] = useState(getPosts(10));
  return (
    <>
      <div className="flex justify-center">
        <Posts posts={posts} />
      </div>
    </>
  );
}

function Posts(props: { posts: Post[] }) {
  if (props.posts.length === 0) {
    return <p>Nothing to see here :(</p>;
  }

  return (
    <ul>
      <li>Hello</li>
    </ul>
  );
}
