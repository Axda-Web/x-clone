import { getAuthSession } from "@/lib/auth";

export default async function Home() {
  const session = await getAuthSession();
  const handleClick = () => {
    console.log("clicked!");
  };
  return <main>{JSON.stringify(session)}</main>;
}
