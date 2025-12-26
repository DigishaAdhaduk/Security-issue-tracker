export const runtime = "nodejs";

export async function POST() {
  return new Response(
    JSON.stringify({ message: "Reset endpoint disabled" }),
    { status: 200 }
  );
}
