import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(_request: NextRequest) {
  const headerList = headers();
  console.log(headerList.get("Authorization"));
  cookies().set("resultPerPage", "20");
  console.log(cookies().get("resultPerPage"));
  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
