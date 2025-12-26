export const runtime = "nodejs";

export async function POST() {
  return new Response(
    JSON.stringify({ message: "Reset not implemented" }),
    { status: 200 }
  );
}
