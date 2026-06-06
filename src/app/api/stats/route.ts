// placeholder
import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET() {
  const totalSms =
    await sql`SELECT COUNT(*)::int AS count FROM sms_inbox`;

  const smsToday = await sql`
    SELECT COUNT(*)::int AS count
    FROM sms_inbox
    WHERE DATE(created_at)=CURRENT_DATE
  `;

  const activeNumbers =
    await sql`
      SELECT COUNT(*)::int AS count
      FROM numbers
      WHERE status='active'
    `;

  const onlineDevices =
    await sql`
      SELECT COUNT(*)::int AS count
      FROM devices
      WHERE status='online'
    `;

  return NextResponse.json({
    totalSms: totalSms[0].count,
    smsToday: smsToday[0].count,
    activeNumbers: activeNumbers[0].count,
    onlineDevices: onlineDevices[0].count
  });
}