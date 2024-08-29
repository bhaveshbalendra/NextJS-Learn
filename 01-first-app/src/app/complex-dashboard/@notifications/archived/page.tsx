import Card from "@/components/card";
import Link from "next/link";
import React from "react";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived Notification</div>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
}
