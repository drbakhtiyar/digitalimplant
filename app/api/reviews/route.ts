import { NextResponse } from "next/server";
import { GoogleAuth } from "google-auth-library";

export const revalidate = 3600;

export interface ReviewItem {
  author: string;
  rating: number;
  text: string;
  time: string;
}

export async function GET() {
  try {
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKeyRaw = process.env.GOOGLE_PRIVATE_KEY;
    const locationName = process.env.GOOGLE_LOCATION_NAME;

    if (!clientEmail || !privateKeyRaw || !locationName) {
      return NextResponse.json({
        fallback: true,
        message: "Google rəyləri tezliklə əlavə olunacaq.",
      });
    }

    const privateKey = privateKeyRaw.replace(/\\n/g, "\n");

    const auth = new GoogleAuth({
      credentials: { client_email: clientEmail, private_key: privateKey },
      scopes: ["https://www.googleapis.com/auth/business.manage"],
    });

    const client = await auth.getClient();
    const token = await client.getAccessToken();

    const res = await fetch(
      `https://mybusiness.googleapis.com/v4/${locationName}/reviews?pageSize=50`,
      {
        headers: { Authorization: `Bearer ${token.token}` },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return NextResponse.json({
        fallback: true,
        message: "Google rəyləri tezliklə əlavə olunacaq.",
      });
    }

    const data = await res.json();
    const reviews: ReviewItem[] = (data.reviews ?? [])
      .filter((r: { starRating: string }) => r.starRating === "FIVE")
      .slice(0, 10)
      .map(
        (r: {
          reviewer: { displayName: string };
          comment: string;
          updateTime: string;
        }) => ({
          author: r.reviewer?.displayName ?? "Anonymous",
          rating: 5,
          text: r.comment ?? "",
          time: new Date(r.updateTime).toLocaleDateString("az-AZ"),
        })
      );

    if (!reviews.length) {
      return NextResponse.json({
        fallback: true,
        message: "Google rəyləri tezliklə əlavə olunacaq.",
      });
    }

    return NextResponse.json({ reviews });
  } catch {
    return NextResponse.json({
      fallback: true,
      message: "Google rəyləri tezliklə əlavə olunacaq.",
    });
  }
}
