import clsx from "clsx";
import { Loader2 } from "lucide-react";

const Loader = ({ size, className }: { size?: number; className?: string }) => {
  return <Loader2 className={clsx("animate-spin", className)} size={size} />;
};
export default Loader;
