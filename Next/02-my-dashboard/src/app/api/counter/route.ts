import { NextResponse } from "next/server";

export async function GET(requres: Request) {
  return NextResponse.json({
    count: 100,
  });
}
