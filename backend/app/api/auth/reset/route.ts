export async function POST() {
  return new Response(
    JSON.stringify({
      message: "Password reset not implemented yet",
    }),
    { status: 200 }
  );
}
