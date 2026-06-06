// placeholder
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export interface SessionUser {
  username: string;
}

export function signToken(payload: SessionUser) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d"
  });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}