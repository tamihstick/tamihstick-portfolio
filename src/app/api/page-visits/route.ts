import { NextResponse } from "next/server";

let visitCount = 0;
let commentCount = 0;

function formatCount(value: number) {
  if (value >= 1_000_000) {
    return `${Math.round(value / 100_000) / 10}M`;
  }

  if (value >= 1_000) {
    return `${Math.round(value / 100) / 10}k`;
  }

  return `${value}`;
}

export async function GET() {
  visitCount += 1;
  commentCount = Math.max(commentCount + 1, Math.round(visitCount * 0.42));

  return NextResponse.json({
    recentViews: formatCount(visitCount),
    comments: formatCount(commentCount),
  });
}
