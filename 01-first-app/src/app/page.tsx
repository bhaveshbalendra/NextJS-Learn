import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>This is home page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Product</Link>
    </>
  );
}
