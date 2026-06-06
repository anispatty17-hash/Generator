// placeholder
"use client";

import {
  useEffect,
  useState
} from "react";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import NumberTable from "@/components/NumberTable";

export default function NumbersPage() {

  const [numbers, setNumbers] =
    useState<any[]>([]);

  const [form, setForm] =
    useState({
      phone_number: "",
      provider: "",
      label: "",
      status: "active"
    });

  async function load() {
    const res =
      await fetch("/api/numbers");

    setNumbers(
      await res.json()
    );
  }

  async function create() {
    await fetch(
      "/api/numbers",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify(
          form
        )
      }
    );

    load();
  }

  async function remove(
    id: number
  ) {
    await fetch(
      `/api/numbers?id=${id}`,
      {
        method: "DELETE"
      }
    );

    load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1">

        <Navbar />

        <div className="p-6">

          <h1 className="text-2xl font-bold mb-6">
            Numbers
          </h1>

          <div className="card p-6 mb-6">

            <input
              placeholder="Phone Number"
              className="w-full mb-3 p-3 bg-slate-800 rounded"
              onChange={(e) =>
                setForm({
                  ...form,
                  phone_number:
                    e.target.value
                })
              }
            />

            <button
              onClick={create}
              className="bg-cyan-500 px-4 py-2 rounded"
            >
              Add Number
            </button>

          </div>

          <div className="card p-6">

            <NumberTable
              numbers={
                numbers
              }
              onDelete={
                remove
              }
            />

          </div>

        </div>

      </main>

    </div>
  );
}