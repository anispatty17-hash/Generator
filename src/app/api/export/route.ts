// placeholder
import { sql } from "@/lib/db";

export async function GET() {

  const rows = await sql`
    SELECT *
    FROM sms_inbox
    ORDER BY created_at DESC
  `;

  let csv =
    "ID,SENDER,MESSAGE,DEVICE,TIME\n";

  rows.forEach((row: any) => {
    csv += `"${row.id}","${row.sender}","${row.message}","${row.device_id}","${row.created_at}"\n`;
  });

  return new Response(csv, {
    headers: {
      "Content-Type":
        "text/csv;charset=utf-8",
      "Content-Disposition":
        "attachment; filename=sms.csv"
    }
  });
}