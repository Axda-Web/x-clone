import ThemeToggle from "@/src/theme/ThemeToggle";
import clsx from "clsx";
import { RiTwitterXFill } from "react-icons/ri";
const Header = () => {
  return (
    <header className="border-b border-b-accent">
      <div className="container flex items-center py-2 max-w-lg m-auto gap-1">
        <h2 className="text-2xl font-bold mr-auto">
          <RiTwitterXFill
            className={clsx("text-foreground", "dark:text-foreground")}
          />
        </h2>
        <ThemeToggle />
      </div>
    </header>
  );
};
export default Header;
