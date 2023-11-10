import { PostHome, get20LastPosts } from "@/src/db/query/post.query";
import { getAuthSession } from "@/lib/auth";
import { PropsWithChildren } from "react";
import clsx from "clsx";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { formatDate } from "@/lib/date";
import { MoreHorizontal } from "lucide-react";

type PostLayoutProps = PropsWithChildren<{
  user: PostHome["user"];
  postId?: string;
  createdAt?: Date;
  className?: string;
}>;

const PostLayout = async ({
  user,
  postId,
  createdAt,
  className,
  children,
}: PostLayoutProps) => {
  const session = await getAuthSession();
  const posts = await get20LastPosts();

  const postHeader = (
    <div className="flex flex-row items-center gap-2">
      <p className="text-sm text-card-foreground mr-auto">{user.username}</p>
      {createdAt ? (
        <p className="text-sm text-muted-foreground">{formatDate(createdAt)}</p>
      ) : null}
      <button>
        <MoreHorizontal size={20} />
      </button>
    </div>
  );
  return (
    <div className={clsx("flex w-full flex-row items-center p-4", className)}>
      <Avatar>
        {user.image ? (
          <AvatarImage src={user.image} alt={user.username} />
        ) : null}
        <AvatarFallback>
          {user.username.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="ml-4 flex w-full flex-col gap-2">
        <Link href={`/users/${postId}`}>
          <div className="flex flex-row items-center gap-2">
            <p className="text-sm text-card-foreground mr-auto">
              {user.username}
            </p>
            {createdAt ? (
              <p className="text-sm text-muted-foreground">
                {formatDate(createdAt)}
              </p>
            ) : null}
            <button>
              <MoreHorizontal size={20} />
            </button>
          </div>
        </Link>
        {children}
      </div>
    </div>
  );
};
export default PostLayout;
