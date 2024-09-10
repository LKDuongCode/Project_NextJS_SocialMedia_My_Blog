import { Post } from "@/interfaces/postType";

export function filterPosts(posts: Post[], query: string): Post[] {
  switch (query) {
    case "hided":
      return posts.filter((post) => !post.display);
    case "shown":
      return posts.filter((post) => post.display);
    case "public":
      return posts.filter((post) => post.status === "public");
    case "private":
      return posts.filter((post) => post.status === "private");
    case "friend":
      return posts.filter((post) => post.status === "friend");
    default:
      return [];
  }
}

export function generatePostsByUserId(posts: Post[], id: number): Post[] {
  return posts.filter((post) => post.user_id === id);
}
