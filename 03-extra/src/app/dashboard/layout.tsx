import React from "react";

export default function DashBoardLayout({
  children,
  users,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div>{users}</div>
    </>
  );
}
