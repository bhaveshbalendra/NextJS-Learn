import React from "react";

export default function Review() {
  const random = Math.random();

  if (random === 1) {
    throw new Error("loading review");
  }
  return <div>Review Page</div>;
}
