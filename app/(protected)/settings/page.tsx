"use client";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingPage = () => {
  const user = useCurrentUser();
  const onClick = () => {
    logout();
  };
  return (
    <div className="bg-white p-10 rounded-xl">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        type="submit"
        onClick={onClick}
      >
        Sign out
      </button>
    </div>
  );
};

export default SettingPage;
