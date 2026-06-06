// placeholder
"use client";

import {
  useEffect,
  useState
} from "react";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import DeviceTable from "@/components/DeviceTable";

export default function DevicesPage() {

  const [devices, setDevices] =
    useState<any[]>([]);

  const [form, setForm] =
    useState({
      device_id: "",
      device_name: "",
      provider: "",
      status: "online"
    });

  async function load() {
    const res =
      await fetch("/api/devices");

    setDevices(
      await res.json()
    );
  }

  async function create() {
    await fetch(
      "/api/devices",
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

    setForm({
      device_id: "",
      device_name: "",
      provider: "",
      status: "online"
    });

    load();
  }

  async function remove(
    id: number
  ) {
    await fetch(
      `/api/devices?id=${id}`,
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
            Devices
          </h1>

          <div className="card p-6 mb-6">

            <input
              placeholder="Device ID"
              className="w-full mb-3 p-3 bg-slate-800 rounded"
              value={
                form.device_id
              }
              onChange={(e) =>
                setForm({
                  ...form,
                  device_id:
                    e.target.value
                })
              }
            />

            <input
              placeholder="Device Name"
              className="w-full mb-3 p-3 bg-slate-800 rounded"
              value={
                form.device_name
              }
              onChange={(e) =>
                setForm({
                  ...form,
                  device_name:
                    e.target.value
                })
              }
            />

            <button
              onClick={create}
              className="bg-cyan-500 px-4 py-2 rounded"
            >
              Add Device
            </button>

          </div>

          <div className="card p-6">
            <DeviceTable
              devices={
                devices
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