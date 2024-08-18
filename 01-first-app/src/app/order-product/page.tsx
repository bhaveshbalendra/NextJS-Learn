import React from "react";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  function handleClick() {
    router.push("/");
  }
  return (
    <>
      <div>Order Product</div>;<button onClick={handleClick}>Order</button>
    </>
  );
}
