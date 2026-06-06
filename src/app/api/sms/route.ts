export async function DELETE(req: NextRequest) {

  const id =
    req.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "id required" },
      { status: 400 }
    );
  }

  await sql`
    DELETE FROM sms_inbox
    WHERE id=${Number(id)}
  `;

  return NextResponse.json({
    success: true
  });
}