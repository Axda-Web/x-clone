import { getAuthSession } from "@/lib/auth";
import { get20LastPosts } from "@/src/db/query/post.query";
import Post from "@/src/feature/post/Post";

export default async function Home() {
  const session = await getAuthSession();
  const posts = await get20LastPosts();

  return (
    <main className="divide-y divide-muted">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </main>
  );
}
