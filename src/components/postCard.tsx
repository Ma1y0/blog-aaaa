import { Link } from "react-router-dom";
import { Post } from "../lib/posts_db";

export function PostCard(props: { post: Post }) {
  return (
    <>
      <Link to={`/post/${props.post.title}`}>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">{props.post.title}</h2>
            <p>{props.post.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
