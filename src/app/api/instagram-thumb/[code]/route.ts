import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  context: { params: Promise<{ code: string }> },
) {
  const { code } = await context.params;
  if (!/^[A-Za-z0-9_-]{5,20}$/.test(code)) {
    return new NextResponse("Not found", { status: 404 });
  }

  const source = await fetch(
    `https://www.instagram.com/p/${code}/media/?size=l`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
      },
      redirect: "follow",
      next: { revalidate: 3600 },
    },
  );

  if (!source.ok) {
    return new NextResponse("Not found", { status: 404 });
  }

  const image = await source.arrayBuffer();
  return new NextResponse(image, {
    headers: {
      "Content-Type": source.headers.get("content-type") ?? "image/jpeg",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
