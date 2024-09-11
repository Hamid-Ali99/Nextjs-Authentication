import { auth, signOut } from "@/auth";

const SettingPage = async () => {
  const session = await auth();
  return (
    <div>
      SettingPage and {JSON.stringify(session)}
      <div>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
            type="submit"
          >
            Sign out
          </button>
        </form>
      </div>
    </div>
  );
};

export default SettingPage;
