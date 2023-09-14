import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Yinpiao Wongtrakunmeka",
    studentId: "650612103",
  });
};
