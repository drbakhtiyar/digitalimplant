import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  service: z.string().min(1),
  message: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Məlumatlar düzgün deyil" }, { status: 400 });
    }

    return NextResponse.json({ ok: true, message: "Sorğunuz qəbul edildi" });
  } catch {
    return NextResponse.json({ ok: false, error: "Server xətası" }, { status: 500 });
  }
}
