import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog First",
  },
};

export default function FirstBlog() {
  return <h1>This is First blog</h1>;
}
