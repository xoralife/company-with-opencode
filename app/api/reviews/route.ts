import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "reviews.json");

async function readReviews() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeReviews(reviews: unknown[]) {
  await fs.writeFile(DATA_FILE, JSON.stringify(reviews, null, 2), "utf-8");
}

export async function GET() {
  const reviews = await readReviews();
  return NextResponse.json(reviews);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, rating, message } = body;

    if (!name || !rating || !message) {
      return NextResponse.json({ error: "Name, rating, and message are required" }, { status: 400 });
    }

    const reviews = await readReviews();
    const newReview = {
      id: Date.now().toString(),
      name,
      rating: Math.min(5, Math.max(1, Number(rating))),
      message,
      date: new Date().toISOString().split("T")[0],
    };
    reviews.unshift(newReview);
    await writeReviews(reviews);

    return NextResponse.json(newReview, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }
    const reviews = await readReviews();
    const filtered = reviews.filter((r: { id: string }) => r.id !== id);
    if (filtered.length === reviews.length) {
      return NextResponse.json({ error: "Review not found" }, { status: 404 });
    }
    await writeReviews(filtered);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
