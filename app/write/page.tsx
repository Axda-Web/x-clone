import WritePostForm from "./WriteForm";
import { getUser } from "@/src/db/query/user.query";

const WritePage = async () => {
  const user = await getUser();
  return (
    <main>
      <WritePostForm
        user={user}
        onSubmit={async () => {
          "use server";
        }}
      />
    </main>
  );
};
export default WritePage;

// FIXME: Client component is using server env variable. Find where it's comming from.
