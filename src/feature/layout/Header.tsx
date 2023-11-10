import ThemeToggle from "@/src/theme/ThemeToggle";
import clsx from "clsx";
import { RiTwitterXFill } from "react-icons/ri";
import LoginButton from "./auth/LoginButton";
import { getAuthSession } from "@/lib/auth";
import UserProfile from "./auth/UserProfile";

const Header = async () => {
  const session = await getAuthSession();
  return (
    <header className="border-b border-b-accent fixed top-0 w-full bg-background z-20">
      <div className="container flex items-center py-2 max-w-lg m-auto gap-1">
        <h2 className="text-2xl font-bold mr-auto">
          <RiTwitterXFill
            className={clsx("text-foreground", "dark:text-foreground")}
          />
        </h2>
        {session?.user ? <UserProfile /> : <LoginButton />}
        <ThemeToggle />
      </div>
    </header>
  );
};
export default Header;
