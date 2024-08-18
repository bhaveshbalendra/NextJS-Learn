import React from "react";
import users from "./@users/page";
import revenues from "./@revenue/page";
import notifications from "./@notifiactions/page";

export default function DashboardLayout({
  children,
  users,
  revenues,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenues: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenues}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </>
  );
}
