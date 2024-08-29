"use client";

import React, { useState } from "react";

export default function DashboardPage() {
  const [name, setName] = useState("");
  console.log("Dashboard client component");
  return (
    <div>
      <h1>Dashboard Page</h1>
      <input
        value={name}
        style={{ color: "red" }}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}!</p>
    </div>
  );
}
