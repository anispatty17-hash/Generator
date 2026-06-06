// placeholder
import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL missing");
}

export const sql = neon(process.env.DATABASE_URL);

export async function query<T = unknown>(
  strings: TemplateStringsArray,
  ...values: unknown[]
): Promise<T[]> {
  try {
    const result = await sql(strings, ...values);
    return result as T[];
  } catch (error) {
    console.error("Database Error:", error);
    throw error;
  }
}