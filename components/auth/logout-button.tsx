"use client";

import { logout } from "@/actions/logout";

const LogoutButton = ({ children }: { children: React.ReactNode }) => {
  const onClick = () => {
    logout();
  };
  return (
    <span onClick={onClick} className="cursur-pointer">
      {children}
    </span>
  );
};

export default LogoutButton;
