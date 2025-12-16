"use client";

import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      <h1>Page Profile</h1>
      <hr />

      <div className="flex flex-col gap-2">
        <span>{session?.user?.name ?? "No Name"}</span>
        <span>{session?.user?.email ?? "No Email"}</span>
        <span>{session?.user?.image ?? "No Image"}</span>
      </div>
    </div>
  );
};

export default ProfilePage;
