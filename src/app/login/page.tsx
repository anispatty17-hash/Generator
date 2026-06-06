// placeholder
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function login() {
    try {
      setLoading(true);

      const res = await fetch(
        "/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify({
            username,
            password
          })
        }
      );

      if (!res.ok) {
        alert("Login Failed");
        return;
      }

      router.push("/dashboard");
      router.refresh();

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A]">

      <div className="w-full max-w-md bg-[#111827] p-8 rounded-3xl">

        <h1 className="text-3xl font-bold mb-6">
          ANZZZ SMS GATEWAY
        </h1>

        <input
          className="w-full p-3 mb-4 rounded-xl bg-slate-800"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          className="w-full p-3 mb-4 rounded-xl bg-slate-800"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={login}
          disabled={loading}
          className="w-full bg-cyan-500 py-3 rounded-xl"
        >
          {loading
            ? "Loading..."
            : "Login"}
        </button>

      </div>

    </div>
  );
}