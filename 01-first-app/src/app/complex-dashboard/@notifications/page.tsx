import Card from "@/components/card";
import Link from "next/link";
import React from "react";

export default function Notifications() {
  return (
    <Card>
      <div>Notification</div>
      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  );
}
