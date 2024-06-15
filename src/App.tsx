import { useEffect, useState } from "react";
import { Post, getPosts } from "./lib/posts_db";
import { PostCard } from "./components/postCard";

export default function App() {
  const [posts, setPosts] = useState(getPosts(10));

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedPosts = getPosts(20);
      setPosts(updatedPosts);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

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
    <ul className="flex h-full w-full flex-col items-center gap-3">
      {props.posts.map((post) => (
        <li key={crypto.randomUUID()} className="w-full">
          {<PostCard post={post} />}
        </li>
      ))}
    </ul>
  );
}
