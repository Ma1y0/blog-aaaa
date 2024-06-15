interface Post {
  title: string;
  description: string;
  tags: string[];
  content: string;
  authorId: string;
}

export function createPost(post: Post) {
  const posts = JSON.parse(localStorage.getItem("posts") ?? "[]") as Post[];
  posts.push(post);
  localStorage.setItem("posts", JSON.stringify(posts));
}

export function getPosts(limit: number): Post[] {
  const posts = JSON.parse(localStorage.getItem("posts") ?? "[]") as Post[];
  return posts.slice(0, limit);
}
