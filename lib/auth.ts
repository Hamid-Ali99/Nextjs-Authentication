// This file is used for server side to get the session
import { auth } from "@/auth";

export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};
