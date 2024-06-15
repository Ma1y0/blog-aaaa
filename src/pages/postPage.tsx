import { useParams } from "react-router-dom";

export default function PostPage() {
	const {title} = useParams();

  return (
    <div className="h-full w-full">
      <h1>Hello World</h1>
			<p>{title}</p>
    </div>
  );
}
