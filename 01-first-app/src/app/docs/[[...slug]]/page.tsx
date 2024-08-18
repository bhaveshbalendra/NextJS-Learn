import React from "react";

export default function page({ params }: { params: { slug: string[] } }) {
  if (params.slug?.length === 2) {
    return <h1>this is length 2</h1>;
  } else if (params.slug?.length === 3) {
    return <h1>this is length 2</h1>;
  }
  return <div>page</div>;
}
